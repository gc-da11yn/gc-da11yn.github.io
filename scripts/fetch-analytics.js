const { google } = require('googleapis');
const analyticsData = google.analyticsdata('v1beta');
require('dotenv').config();
const fs = require('fs');

async function fetchAnalyticsData() {
	try {
		const auth = new google.auth.OAuth2(
			process.env.GOOGLE_CLIENT_ID,
			process.env.GOOGLE_CLIENT_SECRET
		);
		auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

		const response = await analyticsData.properties.runReport({
			auth,
			property: `properties/${process.env.PROPERTY_ID}`,
			requestBody: {
				dateRanges: [{ startDate: '2024-01-01', endDate: '2024-12-31' }],
				dimensions: [
					{ name: 'year' },  // Fetch year
					{ name: 'month' },  // Fetch month
					{ name: 'country' },
					{ name: 'deviceCategory' }
				],
				metrics: [
					{ name: 'sessions' },
					{ name: 'newUsers' },
					{ name: 'screenPageViews' },
					{ name: 'bounceRate' },
					{ name: 'averageSessionDuration' } // Include average session duration metric
				]
			}
		});

		const rows = response.data.rows;
		const analyticsResults = rows.reduce((acc, row) => {
			const year = row.dimensionValues[0].value;  // Extract the year
			const month = row.dimensionValues[1].value; // Extract the month
			const yearMonth = `${year}-${month.padStart(2, '0')}`; // Combine year and month

			const country = row.dimensionValues[2].value;
			const deviceCategory = row.dimensionValues[3].value;
			const sessions = parseInt(row.metricValues[0].value);
			const newUsers = parseInt(row.metricValues[1].value);
			const screenPageViews = parseInt(row.metricValues[2].value);
			const bounceRate = parseFloat(row.metricValues[3].value);
			const avgSessionDuration = parseFloat(row.metricValues[4].value); // Capture average session duration

			if (!acc[yearMonth]) {
				acc[yearMonth] = {
					results: [{
						sessions: 0,
						newUsers: 0,
						screenPageViews: 0,
						totalBounceRate: 0, // Track total bounce rate
						totalAvgSessionDuration: 0, // Track total session duration
						totalSessions: 0,  // Track total sessions for percentage calculation
						countries: {},
						devices: {}
					}],
					totalBounceRateSum: 0,
					totalAvgSessionDurationSum: 0,
				};
			}

			const monthData = acc[yearMonth].results[0];
			monthData.sessions += sessions;
			monthData.newUsers += newUsers;
			monthData.screenPageViews += screenPageViews;
			monthData.totalSessions += sessions; // Track total sessions for percentage

			// Track the bounce rate and session duration weighted by sessions
			acc[yearMonth].totalBounceRateSum += bounceRate * sessions;
			acc[yearMonth].totalAvgSessionDurationSum += avgSessionDuration * sessions;

			// Track countries
			if (!monthData.countries[country]) {
				monthData.countries[country] = 0;
			}
			monthData.countries[country] += sessions;

			// Track devices
			if (!monthData.devices[deviceCategory]) {
				monthData.devices[deviceCategory] = 0;
			}
			monthData.devices[deviceCategory] += sessions;

			return acc;
		}, {});

		// Calculate average bounce rate and limit top countries/devices
		Object.keys(analyticsResults).forEach((yearMonth) => {
			const monthData = analyticsResults[yearMonth].results[0];

			// Calculate weighted bounce rate and average session duration
			monthData.bounceRate = (analyticsResults[yearMonth].totalBounceRateSum / monthData.totalSessions).toFixed(2);
			monthData.avgSessionDuration = (analyticsResults[yearMonth].totalAvgSessionDurationSum / monthData.totalSessions / 60).toFixed(2); // Convert to minutes

			// Sort and limit top countries to 3
			monthData.topCountries = Object.entries(monthData.countries)
				.sort(([, a], [, b]) => b - a)
				.slice(0, 3)
				.map(([country]) => country);

			// Calculate device percentages and sort devices
			monthData.topDevices = Object.entries(monthData.devices)
				.map(([device, count]) => ({
					device,
					percentage: ((count / monthData.totalSessions) * 100).toFixed(2)
				}))
				.sort((a, b) => b.percentage - a.percentage); // Sort by percentage
		});

		// Sort months in reverse chronological order
		const sortedAnalyticsResults = Object.keys(analyticsResults)
			.sort((a, b) => new Date(b) - new Date(a)) // Sort by date in reverse order
			.reduce((acc, key) => {
				acc[key] = analyticsResults[key];
				return acc;
			}, {});

		// Save the data to a JSON file for Eleventy
		fs.writeFileSync('./src/_data/analytics.json', JSON.stringify(sortedAnalyticsResults, null, 2));
		console.log('Analytics data saved to ./src/_data/analytics.json');
	} catch (err) {
		console.error('Error fetching analytics data:', err);
	}
}

fetchAnalyticsData();

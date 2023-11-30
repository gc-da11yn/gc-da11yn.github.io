const { getGitLastUpdatedTimeStamp, getGitFirstAddedTimeStamp } = require('./gitDateHelpers');

// Replace with your file path
const filePath = './gitDateHelpers.js'; // Update this with an actual file path

// Test getGitLastUpdatedTimeStamp function
const lastUpdated = getGitLastUpdatedTimeStamp(filePath);
console.log('Last Updated:', new Date(lastUpdated));

// Test getGitFirstAddedTimeStamp function
const firstAdded = getGitFirstAddedTimeStamp(filePath);
console.log('First Added:', new Date(firstAdded));

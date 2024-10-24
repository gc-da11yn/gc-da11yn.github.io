$(function () {
	data =
	[{
		valueLabels:
		{
			show: true,
			showTextLabel: true,
			yoffset: 1,
			align: 'center',
			font: "9pt 'Trebuchet MS'",
			fontcolor: 'blue'
		}
	}];
options =
{
	series: {bars: {show: true}},
	bars:   {align: "center", barWidth: 0.8, lineWidth: 1, fillColor: '#ffff00'},
	xaxis:  {show: false},
	yaxis:  {min: 0, max: 14, tickSize: 2, tickDecimals: 0}
		};

	$.plot($('#dat-analytics'), data, options);
});

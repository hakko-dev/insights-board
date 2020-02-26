var ctx = document.getElementById('trend').getContext('2d');

var lineChartData = {
	labels: ["통행객", "방문객", "체류객", "구매건수"],
	datasets: [{
		label: '통행객',
		borderColor: ['rgb(0, 138, 255)', 'rgb(79, 91, 255)','rgb(39, 53, 140)', 'rgb(0, 234, 66)' ],
		backgroundColor: ['rgb(0, 138, 255)', 'rgb(79, 91, 255)','rgb(39, 53, 140)', 'rgb(0, 234, 66)' ],
		fill: false,
		barThickness: 60,
		data: [
			randomScalingFactor(30000,40000),
			randomScalingFactor(20000, 30000),
			randomScalingFactor(10000,20000),
			randomScalingFactor(2000, 5000),
		],
	}]
};
Chart.plugins.unregister(ChartDataLabels)
window.trendChart = new Chart(ctx, {
	plugins: [ChartDataLabels],
	type: "bar",
	data: lineChartData,
	options: {
		responsive: true,
		maintainAspectRatio: false,
		hoverMode: 'index',
		stacked: false,
		title: {
			display: false,
		},
		region: {
			display: true
		},
		legend:{
			display: false,
			position: 'bottom',
			labels: {
				boxWidth: 12
			}
		},
		plugins: {
			// Change options for ALL labels of THIS CHART
			datalabels: {
				color: 'black',
				anchor: 'end',
				align: "bottom",
				offset: -23,
				clamp: true,
				clip: true,
				formatter: function(value, context) {
					return value.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
				}
			}
		},
		elements:{
			line: {
				borderWidth:2,
				cubicInterpolationMode:'default',
				tension: 0,
			},
			point: {
				radius: 1
			},
			rectangle: {
				borderWidth: 2,
				borderColor: '0B84A5',
				borderSkipped: 'bottom',
				stepLabel: {
					display: true,
					fontSize: 20,
					// color: "red"
				}
			}
		},
		animation:{

		},
		tooltips: {
			enabled: false,
			mode: 'index',
			intersect: false
		},
		scales: {
			gridLines:{
				display: false,
				ticks: {

				}
			},
			xAxes : [ {
				gridLines : {
					display : false
				}
			}],
			yAxes: [{
				type: 'linear',
				display: true,
				position: 'left',
				id: 'y-axis-1',
				ticks: {
					padding: 10,
					suggestedMax: Math.max.apply(null, lineChartData.datasets[0].data)* 1.1,
					callback: function(value){
						if(value >= 10000){
							return value / 10000 + "만"
						}
						return value
					}
				},
				gridLines: {
					drawBorder: false
				}

			}],
		}
	}
});

/**
 * day, week, month
 */
window.setTrendTimeRange = function(range){
	// 업데이트
	// lineChartData.labels = [] // 맨 아래 일, 주, 월 항목들
	lineChartData.datasets.forEach(function(dataset) {
		dataset.data = dataset.data.map(function() {
			return randomScalingFactor(); // 실제 값 넣기
		});
	});

	window.trendChart.update();
}

$(function(){
	$(".sparkline").sparkline('html',{
		type: 'bar',
		barColor: '#d0d7dd',
		fillColour: '#d0d7dd',
		disableTooltips: true
	});
})

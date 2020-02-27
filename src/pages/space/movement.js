

var data = {
	labels: ["1F", "2F", "3F"],
	datasets: [{
		label: '통행객',
		borderColor: ['rgb(0, 195, 255)', 'rgb(0, 195, 255)','rgb(0, 195, 255)' ],
		backgroundColor: ['rgb(0, 195, 255)', 'rgb(0, 195, 255)','rgb(0, 195, 255)' ],
		fill: false,
		barThickness: 60,
		data: [
			randomScalingFactor(1000,1200),
			randomScalingFactor(300, 1000),
			randomScalingFactor(100,300)
		],
	}]
}
Chart.plugins.unregister(ChartDataLabels)
window.chart = new Chart(document.getElementById('directions_walk').getContext('2d'), {
	plugins: [ChartDataLabels],
	type: "bar",
	data,
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
					suggestedMax: Math.max.apply(null, data.datasets[0].data)* 1.1,
					callback: function(value){
						if(value >= 1000){
							return value / 1000 + "K"
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
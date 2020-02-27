
function printDiv(divName) {
	var printContents = document.getElementById(divName).innerHTML;
	var originalContents = document.body.innerHTML;
	var bg = $('body').css('background-color')

	document.body.innerHTML = printContents;
	$('body').css('background-color', 'white')
	drawCharts()
	setTimeout(function(){
		window.print();
		$('body').css('background-color', bg)
		document.body.innerHTML = originalContents;
		drawCharts()
	}, 500)
}

window.printDiv = printDiv

Chart.plugins.unregister(ChartDataLabels)
drawCharts()
function drawCharts(){
	window.chart1 = Chart.Line(document.getElementById('chart1').getContext('2d'), {
		data: {
			labels: ['월','화','수','목','금','토','일'],
			datasets: [{
				label: '2월',
				borderColor: 'rgb(0, 138, 255)',
				backgroundColor: 'rgb(0, 138, 255)',
				fill: false,
				data: _.range(1,8).map(function(i){return randomScalingFactor(0,1000)})
			}, {
				label: '전월',
				borderColor: 'rgb(79, 91, 255)',
				backgroundColor: 'rgb(79, 91, 255)',
				fill: false,
				data: _.range(1,8).map(function(i){return randomScalingFactor(0,1000)}),
			}, {
				label: '전년',
				borderColor: 'rgb(79, 91, 255)',
				backgroundColor: 'rgb(79, 91, 255)',
				fill: false,
				data: _.range(1,8).map(function(i){return randomScalingFactor(0,1000)}),
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			hoverMode: 'index',
			stacked: false,
			title: {
				display: false,
			},
			legend:{
				position: 'bottom',
				labels: {
					boxWidth: 12
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
				}
			},
			tooltips: {
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

	window.chart2 = Chart.Line(document.getElementById('chart2').getContext('2d'), {
		data: {
			labels: ['월','화','수','목','금','토','일'],
			datasets: [{
				label: '2월',
				borderColor: 'rgb(0, 138, 255)',
				backgroundColor: 'rgb(0, 138, 255)',
				fill: false,
				data: _.range(1,8).map(function(i){return randomScalingFactor(4000000,6000000)})
			}, {
				label: '전월',
				borderColor: 'rgb(79, 91, 255)',
				backgroundColor: 'rgb(79, 91, 255)',
				fill: false,
				data: _.range(1,8).map(function(i){return randomScalingFactor(2000000,6000000)}),
			}, {
				label: '전년',
				borderColor: 'rgb(79, 91, 255)',
				backgroundColor: 'rgb(79, 91, 255)',
				fill: false,
				data: _.range(1,8).map(function(i){return randomScalingFactor(3000000,6000000)}),
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			hoverMode: 'index',
			stacked: false,
			title: {
				display: false,
			},
			legend:{
				position: 'bottom',
				labels: {
					boxWidth: 12
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
				}
			},
			tooltips: {
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

	window.chart3 = Chart.Radar(document.getElementById('chart3').getContext('2d'), {
		data: {
			labels: ['통행객','구매율','방문율','체류시간','방문객'],
			datasets: [{
				label: '매장',
				borderColor: 'rgb(0, 138, 255)',
				backgroundColor: 'rgb(0, 138, 255)',
				fill: false,
				data: _.range(1,6).map(function(i){return randomScalingFactor(4000000,6000000)})
			}, {
				label: '브랜드',
				borderColor: 'rgb(79, 91, 255)',
				backgroundColor: 'rgb(79, 91, 255)',
				fill: false,
				data: _.range(1,6).map(function(i){return randomScalingFactor(2000000,6000000)}),
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			hoverMode: 'index',
			stacked: false,
			title: {
				display: false,
			},
			legend:{
				position: 'bottom',
				labels: {
					boxWidth: 12
				}
			},
			elements:{
				line: {
					borderWidth:2,
					cubicInterpolationMode:'default',
					tension: 0,
				},
				point: {
					radius: 3
				}
			},
			scale: {
				ticks:{
					pointLabels: true,
					display: false,
				},
				pointLabels:{
					display: true
				}
			}
		}
	});

	window.chart4 = Chart.Radar(document.getElementById('chart4').getContext('2d'), {
		data: {
			labels: ['통행객','체류율','방문율','체류시간','방문객'],
			datasets: [{
				label: '매장',
				borderColor: 'rgb(0, 138, 255)',
				backgroundColor: 'rgb(0, 138, 255)',
				fill: false,
				data: _.range(1,6).map(function(i){return randomScalingFactor(4000000,6000000)})
			}, {
				label: 'Demo District',
				borderColor: 'rgb(79, 91, 255)',
				backgroundColor: 'rgb(79, 91, 255)',
				fill: false,
				data: _.range(1,6).map(function(i){return randomScalingFactor(2000000,6000000)}),
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			hoverMode: 'index',
			stacked: false,
			title: {
				display: false,
			},
			legend:{
				position: 'bottom',
				labels: {
					boxWidth: 12
				}
			},
			elements:{
				line: {
					borderWidth:2,
					cubicInterpolationMode:'default',
					tension: 0,
				},
				point: {
					radius: 3
				}
			},
			scale: {
				ticks:{
					pointLabels: true,
					display: false,
				},
				pointLabels:{
					display: true
				}
			}
		}
	});
}

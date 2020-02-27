window.chart1 = Chart.Bar(document.getElementById('chart1').getContext('2d'), {
  data: {
    labels: _.range(1,32),
    datasets: [{
      label: '통행객',
      borderColor: 'rgb(0, 138, 255)',
      backgroundColor: 'rgb(0, 138, 255)',
      fill: false,
      data: _.range(1,32).map(function(i){return randomScalingFactor(0,30000)})
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
      display: false,
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
        radius: 4
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

window.chart2 = Chart.Bar(document.getElementById('chart2').getContext('2d'), {
  data: {
    labels: _.range(1,32),
    datasets: [{
      label: '방문객',
      borderColor: 'rgb(0, 138, 255)',
      backgroundColor: 'rgb(0, 138, 255)',
      fill: false,
      data: _.range(1,32).map(function(i){return randomScalingFactor(0,30000)})
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
      display: false,
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
        radius: 4
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

window.chart3 = Chart.Bar(document.getElementById('chart3').getContext('2d'), {
  data: {
    labels: _.range(1,32),
    datasets: [{
      label: '체류객',
      borderColor: 'rgb(0, 138, 255)',
      backgroundColor: 'rgb(0, 138, 255)',
      fill: false,
      data: _.range(1,32).map(function(i){return randomScalingFactor(0,2000)})
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
      display: false,
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
        radius: 4
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

window.chart4 = Chart.Line(document.getElementById('chart4').getContext('2d'), {
  data: {
    labels: _.range(1,32),
    datasets: [{
      label: '방문율',
      borderColor: 'rgb(0, 138, 255)',
      backgroundColor: 'rgb(0, 138, 255)',
      fill: false,
      data: _.range(1,32).map(function(i){return randomScalingFactor(0,4)})
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
      display: false,
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
        radius: 4
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
            return value + "%"
          }
        },
        gridLines: {
          drawBorder: false
        }
      }],
    }
  }
});

window.chart5 = Chart.Line(document.getElementById('chart5').getContext('2d'), {
  data: {
    labels: _.range(1,32),
    datasets: [{
      label: '체류율',
      borderColor: 'rgb(0, 138, 255)',
      backgroundColor: 'rgb(0, 138, 255)',
      fill: false,
      data: _.range(1,32).map(function(i){return randomScalingFactor(60,70)})
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
      display: false,
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
        radius: 4
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
            return value + "%"
          },
          beginAtZero: true,
          suggestedMax: 100
        },
        gridLines: {
          drawBorder: false
        }
      }],
    }
  }
});

window.chart6 = Chart.Bar(document.getElementById('chart6').getContext('2d'), {
  data: {
    labels: _.range(1,32),
    datasets: [{
      label: '체류시간',
      borderColor: 'rgb(0, 138, 255)',
      backgroundColor: 'rgb(0, 138, 255)',
      fill: false,
      data: _.range(1,32).map(function(i){return randomScalingFactor(0,18)})
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
        radius: 4
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
            return value + "분"
          }
        },
        gridLines: {
          drawBorder: false
        }
      }],
    }
  }
});
var ctx = document.getElementById('trend').getContext('2d');

var lineChartData = {
  labels: ['1', '2', '3', '4', '5', '6', '7'],
  datasets: [
    {
      label: '방문객',
      borderColor: 'rgb(0, 138, 255)',
      backgroundColor: 'rgb(0, 138, 255)',
      fill: false,
      data: [
        randomScalingFactor(0, 30000),
        randomScalingFactor(0, 30000),
        randomScalingFactor(0, 30000),
        randomScalingFactor(0, 30000),
        randomScalingFactor(0, 30000),
        randomScalingFactor(0, 30000),
        randomScalingFactor(0, 30000)
      ],
      yAxisID: 'y-axis-1'
    },
    {
      label: '체류객',
      borderColor: 'rgb(79, 91, 255)',
      backgroundColor: 'rgb(79, 91, 255)',
      fill: false,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
      yAxisID: 'y-axis-1'
    },
    {
      label: '매출액',
      borderColor: 'rgb(39, 53, 140)',
      backgroundColor: 'rgb(39, 53, 140)',
      fill: false,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
      yAxisID: 'y-axis-1'
    },
    {
      label: '방문율',
      borderColor: 'rgb(0, 234, 66)',
      backgroundColor: 'rgb(0, 234, 66)',
      borderDash: [5, 5],
      fill: false,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
      yAxisID: 'y-axis-2'
    },
    {
      label: '체류율',
      borderColor: 'rgb(190, 219, 0)',
      backgroundColor: 'rgb(190, 219, 0)',
      borderDash: [5, 5],
      fill: false,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
      yAxisID: 'y-axis-2'
    },
    {
      label: '구매율',
      borderDash: [5, 5],
      borderColor: 'rgb(255, 180, 40)',
      backgroundColor: 'rgb(255, 180, 40)',
      fill: false,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
      yAxisID: 'y-axis-2'
    }
  ]
};

window.trendChart = Chart.Line(ctx, {
  data: lineChartData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    hoverMode: 'index',
    stacked: false,
    title: {
      display: false
    },
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 12
      }
    },
    elements: {
      line: {
        borderWidth: 2,
        cubicInterpolationMode: 'default',
        tension: 0
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
      gridLines: {
        display: false,
        ticks: {}
      },
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          ticks: {
            padding: 10,
            callback: function(value) {
              if (value >= 10000) {
                return value / 10000 + '만';
              }
              return value;
            }
          },
          gridLines: {
            drawBorder: false
          }
        },
        {
          type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: true,
          position: 'right',
          id: 'y-axis-2',
          ticks: {
            padding: 10,
            callback: function(value) {
              return value + '%';
            }
          },
          // grid line settings
          gridLines: {
            drawTicks: false,
            drawBorder: false,
            display: false,
            drawOnChartArea: false // only want the grid lines for one axis to show up
          }
        }
      ]
    }
  }
});

/**
 * day, week, month
 */
window.setTrendTimeRange = function(range) {
  // 업데이트
  // lineChartData.labels = [] // 맨 아래 일, 주, 월 항목들
  lineChartData.datasets.forEach(function(dataset) {
    dataset.data = dataset.data.map(function() {
      return randomScalingFactor(); // 실제 값 넣기
    });
  });

  window.trendChart.update();
};

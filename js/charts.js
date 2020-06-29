var options = {
          series: [{
          name: 'Sales',
          data: [2.3, 3.1, 4.0, 4.1, 4.0, 5.6, 6.2, 9.3, 9.4, 9, 11.5, 11.2]
        }],
          chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },

        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }

        },
        title: {
          text: 'Net Sales',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#sales"), options);
        chart.render();



        var options = {
          series: [{
          name: 'Customers',
          data: [80, 50, 30, 40, 100, 40],
        }],
          chart: {
          height: 350,
          type: 'radar',
        },
        title: {
          text: 'Customers'
        },
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June']
        }
        };

        var chart = new ApexCharts(document.querySelector("#customers"), options);
        chart.render();

<template>
      <div class="border-2 rounded-lg py-4 px-1 shadow-lg m-auto mt-2 mb-2">
             <h1 class="ml-5 text-xl font-semibold">Loudness over time</h1>
        <apexchart type="line" height="250" width="600" :options="chartOptions" :series="series"></apexchart>
      </div>
</template>

<script>
import SensorService from '../../Scripts/SensorService'
export default {
  data: () => ({
    series: [
      {
        name: 'Detsibell',
        data: []
      }
    ],
    //
    chartOptions: {
      tooltip: {
        x: {
          show: true,
          format: 'dd/MMM - HH:mm:ss',
          formatter: undefined
        }
      },
      stroke: {
        width: 3
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#8A2BE2'],
          shadeIntensity: 1,
          type: 'horizontal',
          stops: [0, 100, 100, 100]
        }
      },
      noData: {
        text: 'Loading...',
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
          color: '#000000',
          fontSize: '14px',
          fontFamily: 'Helvetica'
        }
      },
      chart: {
        type: 'radialBar'
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        type: 'datetime',
        labels: {
          datetimeUTC: false
        },
        categories: [],
        tooltip: {
          enabled: false
        }
      },
      yaxis: {
        max: 120,
        min: -40
      }

    }
  }),
  sensorService: null,
  created () {
    this.sensorService = new SensorService()
  },
  mounted () {
    this.sensorService.getLoudness().then(response => {
      response.forEach(element => {
        this.series[0].data.push(element.data)
        this.chartOptions.xaxis.categories.push(element.date_time)
      })
    })
    //
  }
}
</script>

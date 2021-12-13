<template>
  <div class="border-2 rounded-lg py-4 px-1 shadow-lg mb-1">
    <h1 class="ml-5 text-xl font-semibold">Average values</h1>
     <div id="chart">
        <apexchart type="heatmap" height="200" :options="chartOptions" :series="series"></apexchart>
      </div>
  </div>
</template>

<script>
import SensorService from '../../Scripts/SensorService'
import moment from 'moment'
export default {
  data: () => ({
    series: [
      {
        name: 'Avg Humidity',
        data: []
      },
      {
        name: 'Avg Temperature',
        data: []
      },
      {
        name: 'Avg Loudness',
        data: []
      }
    ],

    chartOptions: {
      chart: {
        height: 350,
        type: 'heatmap'
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#008FFB'],
      xaxis: {
        type: 'category',
        categories: [],
        tooltip: {
          enabled: false
        },
        labels: {
          formatter: function (value) {
            value = moment(value).format('DD/MM')
            return value
          }
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
      }
    }
  }),
  sensorService: null,
  created () {
    this.sensorService = new SensorService()
  },
  mounted () {
    this.sensorService.getAveragesPerDay().then((response) => {
      response.forEach(element => {
        this.series[0].data.push(element.avghumidity)
        this.series[1].data.push(element.avgtemp)
        this.series[2].data.push(element.avgloudness)
        this.chartOptions.xaxis.categories.push(element.date)
      })
    })
  }
}
</script>

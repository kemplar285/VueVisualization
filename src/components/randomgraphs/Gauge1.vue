<template>
       <div id="gauges" class='border-2 rounded-lg py-4 px-1 shadow-lg m-auto flex items-center justify-center flex-wrap'>
         <div class='m-auto'><apexchart type="radialBar" height="300" :options="chartOptions" :series="series"></apexchart></div>
      </div>
</template>

<script>
import SensorService from '../../Scripts/SensorService'
export default {
  data: () => ({
    series: [],
    //
    chartOptions: {
      chart: {
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%'
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          gradientToColors: ['#87D4F9'],
          stops: [0, 100]
        }
      },
      labels: ['Humidity']
    }
    //
  }),
  sensorService: null,
  created () {
    this.sensorService = new SensorService()
  },
  mounted () {
    this.sensorService.getHumidity().then(response => {
      response.forEach(element => {
        this.series.push(element.data)
      })
    })
    //
  }
}
</script>

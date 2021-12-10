<template>
    <div class="border-2 rounded-lg py-4 px-1 shadow-lg mb-8">
    <apexchart ref="realtimeChart" width="75%" type="bar" :options="options" :series="series" v-if="series"></apexchart>
    </div>
</template>

<script>
import SensorService from '../../Scripts/SensorService'
export default {
  data: () => ({
    Sensors: null,
    options: {
      chart: {
        id: 'vuechart'
      },
      xaxis: {
        type: 'datetime',
        categories: []
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
    },
    series: [{
      data: []
    }]
  }),
  sensorService: null,
  created () {
    this.sensorService = new SensorService()
  },
  mounted () {
    this.sensorService.getHighAccuracyTemperature().then((response) => {
      this.Sensors = response
      this.Sensors.forEach((element) => {
      })
    })
  }
}
</script>

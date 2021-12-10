<template>
  <div class="border-2 rounded-lg py-4 px-1 shadow-lg mb-8">
    <h1 class="ml-5 text-xl font-semibold">High Accuracy Temperature</h1>
    <apexchart
      v-if="series"
      height="200"
      type="line"
      :options="options"
      :series="series"
      :width="width"
    />
  </div>
</template>

<script>
import SensorService from '../../Scripts/SensorService'
export default {
  data: () => ({
    width: '100%',
    Sensors: [],
    chart: {
      animations: {
        enabled: false
      }
    },
    options: {
      tooltip: {
        x: {
          show: true,
          format: 'dd/MMM - HH:mm:ss',
          formatter: undefined
        }
      },
      chart: {
        id: 'HighAccuracyTemperatureChart'
      },
      xaxis: {
        type: 'datetime',
        labels: {
          datetimeUTC: false
        },
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
    series: [
      {
        name: 'Temperature (C)',
        data: []
      }
    ]
  }),
  sensorService: null,
  created () {
    this.sensorService = new SensorService()
  },
  mounted () {
    this.sensorService.getHighAccuracyTemperature().then((response) => {
      this.Sensors = response
      this.Sensors.forEach((element) => {
        this.series[0].data.push(element.data)
        this.options.xaxis.categories.push(element.date_time)
      })
    })
  }
}
</script>

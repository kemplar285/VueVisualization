<template>
  <div
    class="
      border-2
      rounded-lg
      py-4
      px-1
      shadow-lg
      w-6/12
      inline-flex
      flex-col
      m-2
    "
  >
    <h1 class="ml-5 text-xl font-semibold block">
      High Accuracy Temperature / Temperature and Humidity Sensor Difference
    </h1>
    <apexchart
      v-if="series"
      height="250"
      type="area"
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
    Sensors: [],
    width: '100%',
    options: {
      tooltip: {
        x: {
          show: true,
          format: 'dd/MMM - HH:mm:ss',
          formatter: undefined
        }
      },
      stroke: {
        curve: 'smooth'
      },
      dataLabels: {
        enabled: false
      },
      chart: {
        id: 'DifferenceGraph',
        width: '40%'
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
        name: 'High Accuracy Temperature - Temperature (C)',
        data: []
      },

      {
        name: 'Temperature And Humidity Sensor Pro- Temperature (C)',
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

    this.sensorService.getTemperature().then((response) => {
      this.Sensors = response
      this.Sensors.forEach((element) => {
        this.series[1].data.push(element.data)
      })
    })
  }
}
</script>

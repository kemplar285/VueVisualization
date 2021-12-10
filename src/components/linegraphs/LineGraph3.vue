<template>
  <div
    class="
      border-2
      rounded-lg
      py-4
      px-1
      shadow-lg
      mb-8
      w-6/12
      inline-flex
      flex-col
      m-2
    "
  >
    <h1 class="ml-5 text-xl font-semibold block">
      Daily Average Temperature
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
import moment from 'moment'
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
        name: 'High Accuracy Temperature - Temperature (C)',
        data: []
      }
    ]
  }),
  sensorService: null,
  created () {
    this.sensorService = new SensorService()
  },
  mounted () {
    this.sensorService.getHighAccuracyTemperature().then(response => {
      this.Sensors = response
      this.Sensors.forEach(element => {
        const thisDate = moment(element.date_time).format('LL')
        if (!this.options.xaxis.categories.includes(thisDate)) {
          this.options.xaxis.categories.push(thisDate)
        }
        this.series[0].data.push(element.data)
      })
      console.log(this.options.xaxis.categories)
      console.log(this.series[0].data)
    })
  }
}
</script>

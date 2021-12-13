<template>
    <div class="border-2 rounded-lg py-4 px-1 shadow-lg align-middle m-2">
      <h1 class="ml-5 text-xl font-semibold">The number of rows in the database grouped by sensor id</h1>
    <apexchart ref="realtimeChart" width="100%" height="250" type="bar" :options="options" :series="series"></apexchart>
    </div>
</template>

<script>
import SensorService from '../../Scripts/SensorService'
export default {
  data: () => ({
    Sensors: null,
    options: {
      chart: {
        id: 'numberofrows-sensor',
        type: 'bar',
        toolbar: {
          offsetY: -20
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true
        }
      },
      xaxis: {
        type: 'category',
        categories: [],
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
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true
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
    series: [{
      name: 'Row Count',
      data: []
    }]
  }),
  sensorService: null,
  created () {
    this.sensorService = new SensorService()
  },
  mounted () {
    this.sensorService.getNumberOfRowsForEachSensor().then((response) => {
      response.forEach((element) => {
        this.series[0].data.push(element.count)
        // if (element.dimension !== '1') {
        this.options.xaxis.categories.push(element.controllersensorid)
        // } else {
        //  this.options.xaxis.categories.push('PIR on')
        // }
      })
    })
  }
}
</script>

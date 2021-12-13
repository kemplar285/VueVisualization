<template>
    <div class="border-2 rounded-lg py-4 px-1 shadow-lg align-middle m-2">
      <h1 class="ml-5 text-xl font-semibold">The number of rows in the database grouped by dimension</h1>
    <apexchart ref="realtimeChart" width="90%" height="600" type="radar" :options="options" :series="series"></apexchart>
    </div>
</template>

<script>
import SensorService from '../../Scripts/SensorService'
export default {
  data: () => ({
    Sensors: null,
    options: {
      chart: {
        id: 'numberofrows',
        type: 'bar',
        toolbar: {
          offsetY: -25,
          offsetX: 30
        }
      },
      markers: {
        size: 5,
        hover: {
          size: 10
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
    this.sensorService.getNumberOfRowsForEachDimension().then((response) => {
      response.forEach((element) => {
        this.series[0].data.push(element.count)
        // if (element.dimension !== '1') {
        this.options.xaxis.categories.push(element.dimension)
        // } else {
        //  this.options.xaxis.categories.push('PIR on')
        // }
      })
    })
  }
}
</script>

<template>
  <div class="border-2 rounded-lg py-4 px-1 shadow-lg mb-8">
    <h1 class="ml-5 text-xl font-semibold">High Accuracy Temperature</h1>
    <apexchart
      height="200"
      type="line"
      :options="options"
      :series="series"
    />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    Sensors: [],
    options: {
      tooltip: {
        x: {
          show: true,
          format: 'dd/MMM - HH:mm:ss',
          formatter: undefined
        }
      },
      chart: {
        id: 'vuechart-example'
      },
      xaxis: {
        type: 'datetime',
        labels: {
          datetimeUTC: false
        },
        categories: []
      }
    },
    series: [{
      name: 'Temperature (C)',
      data: []
    }]
  }),
  mounted () {
    axios
      .get('http://localhost:3000/sensors')
      .then((response) => {
        this.Sensors = response.data
        this.Sensors.forEach((element) => {
          if (element.controllersensorid === 19 && element.typevalueid === 1) {
            this.series[0].data.push(element.data)
            this.options.xaxis.categories.push(element.date_time)
          }
        })
        console.log(this.series[0].data)
        console.log(this.options.xaxis.categories)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<template>
    <div class="border-2 rounded-lg py-4 px-1 shadow-lg mb-8">
    <apexchart ref="realtimeChart" width="75%" type="bar" :options="options" :series="series" v-if="series"></apexchart>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    Sensors: [],
    options: {
      chart: {
        id: 'vuechart-example'
      },
      xaxis: {
        type: 'datetime',
        categories: []
      }
    },
    series: [{
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
            this.options.xaxis.categories.push(element.data)
          }
        })
        console.log(this.series[0].data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

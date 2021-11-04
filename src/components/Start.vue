<template>
  <div>
    <div align="center">
      {{ Sensor.sensor }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Start',
  data () {
    return {
      Sensor: {}
    }
  },
  mounted () {
    axios
      .get('http://localhost:8000/sensors')
      .then((response) => {
        console.log(response.data)
        this.Sensor = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

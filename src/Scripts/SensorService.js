import axios from 'axios'
import moment from 'moment'

export default class SensorService {
  getSensors () {
    return axios.get('http://localhost:3000/sensors').then(res => res.data)
  }

  getHighAccuracyTemperature () {
    return axios.get('http://localhost:3000/sensors/temperature').then(res => res.data)
  }

  getTemperature () {
    return axios.get('http://localhost:3000/sensors/temperature2').then(res => res.data)
  }

  formatDateTime (Sensors) {
    this.Sensors.forEach((element) => {
      element.date_time = moment(element.date_time).format(
        'DD/MM/YYYY hh:mm:ss'
      )
    })
  }
}

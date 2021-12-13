import axios from 'axios'
import moment from 'moment'

export default class SensorService {
  basePath = 'http://localhost:3000/sensors'

  getSensors () {
    return axios.get(this.basePath).then(res => res.data)
  }

  getHighAccuracyTemperature () {
    return axios.get(this.basePath + '/temperature').then(res => res.data)
  }

  getTemperature () {
    return axios.get(this.basePath + '/temperature2').then(res => res.data)
  }

  getDailyAverage () {
    return axios.get(this.basePath + '/temperature/daily-average').then(res => res.data)
  }

  getNumberOfRowsForEachDimension () {
    return axios.get(this.basePath + '/numberofrows').then(res => res.data)
  }

  getNumberOfRowsForEachSensor () {
    return axios.get(this.basePath + '/numberofrows-sensor').then(res => res.data)
  }

  getNumberOfZeroesForEachSensor () {
    return axios.get(this.basePath + '/numberofrows-zeroes').then(res => res.data)
  }

  getHumidity () {
    return axios.get(this.basePath + '/humidity').then(res => res.data)
  }

  getPercentageOfOnesPIR () {
    return axios.get(this.basePath + '/pir/percentageOfOnes').then(res => res.data)
  }

  getLoudness () {
    return axios.get(this.basePath + '/loudness').then(res => res.data)
  }

  getAveragesPerDay () {
    return axios.get(this.basePath + '/averages-per-day').then(res => res.data)
  }

  formatDateTime (Sensors) {
    Sensors.forEach((element) => {
      element.date_time = moment(element.date_time).format(
        'DD/MM/YYYY hh:mm:ss'
      )
    })
  }

  formatElementToDDMM (element) {
    element = moment(element).format('DD/MM')
  }
}

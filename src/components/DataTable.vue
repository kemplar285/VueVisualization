<template>

  <div align="center flex">
    <table class="min-w-full divide-y divide-gray-200 flex table">
      <thead class="bg-gray-50">
        <tr>
          <th
            v-for="header in TableHeaders"
            :key="header"
            v-on:click="sortTable(header)"
            class="
              px-6
              py-3
              text-center text-xs
              font-medium
              text-gray-500
              uppercase
              tracking-wider
              cursor-pointer
            "
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="sensor in Sensors" :key="sensor" class="tablerow">
          <td
            v-for="header in TableHeaders"
            :key="header"
            class="px-6 py-4 whitespace-nowrap text-center"
          >
            {{ sensor[header] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  components: {
  },
  data () {
    return {
      Sensors: [],
      sortedSensors: [],
      ascending: false,
      sortColumn: '',
      TableHeaders: [
        'controllersensorid',
        'sensor',
        'date_time',
        'valuetype',
        'data',
        'dimension',
        'typevalueid'
      ],
      currentPage: 1,
      perPage: 2,
      total: 100
    }
  },
  created () {
    axios
      .get('http://localhost:3000/sensors')
      .then((response) => {
        console.log(response.data)
        this.Sensors = response.data
        this.Sensors.forEach((element) => {
          element.date_time = moment(element.date_time).format(
            'DD/MM/YYYY hh:mm:ss'
          )
        })
      })
      .catch((error) => {
        console.log(error)
      })
  },

  methods: {
    sortTable: function sortTable (col) {
      if (this.sortColumn === col) {
        this.ascending = !this.ascending
      } else {
        this.ascending = true
        this.sortColumn = col
      }

      var ascending = this.ascending

      this.Sensors.sort(function (a, b) {
        if (a[col] > b[col]) {
          return ascending ? 1 : -1
        } else if (a[col] < b[col]) {
          return ascending ? -1 : 1
        }
        return 0
      })
    },

    onPageClick (event) {
      this.currentPage = event
    }
  }
}
</script>

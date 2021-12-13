<template>
  <div class="bg-gradient-to-r from-blue-300 to-blue-500 min-h-screen">
    <h1 class="text-xl font-bold text-white mb-4 pt-4 w-11/12 lg:w-10/12 mx-auto">
      Vue Data Visualization
    </h1>

    <app-tabs class="w-11/12 lg:w-10/12 mx-auto mb-16" :tabList="tabList">
      <template v-slot:tabPanel-1>
        <DataTablePrime/>
      </template>
      <template v-slot:tabPanel-2>
        <div class="flex mobile">
          <div class="w-6/12">
            <Radar/>
          </div>
          <div class="flex justify-center flex-column w-6/12">
            <Bar-2/>
            <Bar-3/>
          </div>
        </div>
      </template>
      <template v-slot:tabPanel-3>
        <div>
          <line-graph></line-graph>
          <div class="flex justify-center">
            <Line-Graph2/>
            <Line-Graph3/>
          </div>
        </div>
      </template>
      <template v-slot:tabPanel-4>
        <div id="gauges" class='flex flex items-center justify-center flex-wrap mb-4'>
         <Gauge1/>
          <Line-Graph4/>
         <Gauge2/>
      </div>
      <div>
        <Heat-Map/>
      </div>
      </template>
    </app-tabs>
  </div>
</template>

<script>
import AppTabs from './components/AppTabs'
import Radar from './components/radargraphs/Radar'
import Bar2 from './components/bargraphs/Bar2'
import Bar3 from './components/bargraphs/Bar3'
import DataTablePrime from './components/DataTablePrime.vue'
import LineGraph from './components/linegraphs/LineGraph'
import LineGraph2 from './components/linegraphs/LineGraph2'
import LineGraph3 from './components/linegraphs/LineGraph3'
import LineGraph4 from './components/linegraphs/LineGraph4'
import Gauge1 from './components/randomgraphs/Gauge1'
import Gauge2 from './components/randomgraphs/Gauge2'
import HeatMap from './components/randomgraphs/HeatMap'
export default {
  components: {
    AppTabs,
    DataTablePrime,
    LineGraph,
    LineGraph2,
    LineGraph3,
    LineGraph4,
    Radar,
    Bar2,
    Bar3,
    Gauge1,
    Gauge2,
    HeatMap
  },
  data () {
    return {
      tabList: ['Table', 'Rows', 'Temperature', 'Other']
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 800px) {
  .mobile {
    flex-direction: column;
  }
  body{
  }
}
</style>

<template>
  <div class="bg-gradient-to-r from-blue-300 to-blue-500 min-h-screen">
    <h1
      class="text-xl font-bold text-white mb-4 pt-4 w-11/12 lg:w-10/12 mx-auto"
    >
      Vue Data Visualization
    </h1>

    <app-tabs class="w-11/12 lg:w-10/12 mx-auto mb-16" :tabList="tabList">
      <template v-slot:tabPanel-1>
        <DataTablePrime> </DataTablePrime>
      </template>
      <template v-slot:tabPanel-2> <Bar-1></Bar-1> </template>
      <template v-slot:tabPanel-3>
        <div>
          <line-graph></line-graph>
          <div class="flex justify-center">
            <Line-Graph2></Line-Graph2>
            <Line-Graph3></Line-Graph3>
          </div>
        </div>
      </template>
      <template v-slot:tabPanel-4> </template>
    </app-tabs>
  </div>
</template>

<script>
import AppTabs from './components/AppTabs'
import Bar1 from './components/bargraphs/Bar1'
import LineGraph from './components/linegraphs/LineGraph'
import DataTablePrime from './components/DataTablePrime.vue'
import LineGraph2 from './components/linegraphs/LineGraph2'
import LineGraph3 from './components/linegraphs/LineGraph3'
export default {
  components: {
    AppTabs,
    LineGraph,
    LineGraph2,
    LineGraph3,
    Bar1,
    DataTablePrime
  },
  data () {
    return {
      tabList: ['Table', 'Bar Charts', 'Line Charts', 'Tab 4']
    }
  }
}
</script>

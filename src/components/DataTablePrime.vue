<template>
  <div>
    <DataTable
      :value="sensors"
      :paginator="true"
      :rows="10"
      responsiveLayout="scroll"
      sortMode="multiple"
      v-model:filters="filters"
      filterDisplay="menu"
    >
      <template #empty> No sensors found. </template>
      <template #loading> Loading data. Please wait. </template>
      <Column
        v-for="item in columns"
        :key="item.field"
        :field="item.field"
        :header="item.header"
        :sortable="true"
      >
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            type="text"
            v-model="filterModel.value"
            @keydown.enter="filterCallback()"
            class="p-column-filter"
            :placeholder="`Search - ${filterModel.matchMode}`"
          />
        </template>
      </Column>
      <template #paginatorLeft>
        <Button type="button" icon="pi pi-refresh" />
      </template>
      <template #paginatorRight>
        <Button type="button" icon="pi pi-cloud" />
      </template>
    </DataTable>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import SensorService from '../Scripts/SensorService'
import InputText from 'primevue/inputtext'
import { FilterMatchMode, FilterOperator } from 'primevue/api'
// import ColumnGroup from 'primevue/columngroup'

export default {
  components: {
    DataTable,
    Column,
    InputText
    // ColumnGroup
  },
  data () {
    return {
      columns: null,
      sensors: null,
      filters: {
        controllersensorid: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
        sensor: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
        data: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
        valuetype: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
        dimension: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
        date_time: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] }
      }
    }
  },
  sensorService: null,
  created () {
    this.sensorService = new SensorService()
    this.columns = [
      { field: 'controllersensorid', header: 'Controllersensorid' },
      { field: 'sensor', header: 'Sensor Name' },
      { field: 'data', header: 'Data' },
      { field: 'valuetype', header: 'Value Type' },
      { field: 'dimension', header: 'Dimension' },
      { field: 'date_time', header: 'DateTime' }
    ]
  },
  mounted () {
    this.sensorService.getSensors().then((data) => {
      this.sensors = data
    })
  },
  methods: {}
}
</script>

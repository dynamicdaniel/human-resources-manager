<template>
  <el-table
    :data="dataSource"
    stripe
    style="width: 100%">
    <el-table-column
      v-for="(item, index) in columns"
      :key="item.title"
      :fixed="index === 0"
      :prop="item.dataIndex"
      :label="item.title"
      :formatter="item.formatter ? item.formatter : null"
      align="center"
      width="180">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="180">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          编辑
        </el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          详情
        </el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: 'commonTable',
    props: {
      dataSource: Array,
      columns: Array
    },
    data () {
      return {
      }
    },
    methods () {

    }
  }
</script>
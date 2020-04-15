<template>
  <d2-container better-scroll>
		<employee-filter :filter="filter" :handleSubmit="onSubmit" :handleReset="onReset" :handleAdd="onAdd" />
		<el-divider />
    <common-table
			:data-source="dataSource"
			:columns='columns'
		/>
  </d2-container>
</template>

<script>
import employeeFilter from './employeeFilter'
import commonTable from '../../component/commonTable'
export default {
	name: 'employeeInfo',
  data () {
    return {
			visible: false,
			dataSource: [{
				name: 'zhangsan',
				gender: 'male',
				department: 'zhaoshang',
				position: 'xx',
				qulification: 'xx',
			}, {
				name: 'wangwu',
				gender: 'male',
				department: 'zhaoshang',
				position: 'xx',
				qulification: 'xx',
			}, {
				name: 'zhangsan',
				gender: 'male',
				department: 'zhaoshang',
				position: 'xx',
				qulification: 'xx',
			}, {
				name: 'wangwu',
				gender: 'male',
				department: 'zhaoshang',
				position: 'xx',
				qulification: 'xx',
			}, {
				name: 'zhangsan',
				gender: 'male',
				department: 'zhaoshang',
				position: 'xx',
				qulification: 'xx',
			}, {
				name: 'wangwu',
				gender: 'male',
				department: 'zhaoshang',
				position: 'xx',
				qulification: 'xx',
			}],
			columns: [
				{
					title: '姓名',
					dataIndex: 'name',
					formatter: (r, c, v, i) => {
						return 'test'
					}
				},
				{
					title: '性别',
					dataIndex: 'sex'
				},
				{
					title: '部门',
					dataIndex: 'deptName'
				},
				{
					title: '岗位',
					dataIndex: 'jobName'
				},
				{
					title: '任职资格',
					dataIndex: 'qualification'
				},
				{
					title: '联系方式',
					dataIndex: 'tel'
				},
			],
			filter: {
				fields: {
					name: '',
					sex: '',
					date: [],
					qualification: '',
					jobId: '',
					deptId: ''
				},
			},
    }
  },
  components: {
		commonTable,
		employeeFilter
	},
	methods: {
		onSubmit (value) {
			console.log('filter', value)
			this.$set(this.filter, 'fields', { ...value })
		},
		onReset (value) {
			this.$set(this.filter, 'fields', { ...value })
		},
		onAdd () {

		}
	}
}
</script>

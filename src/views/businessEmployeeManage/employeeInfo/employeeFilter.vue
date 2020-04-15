<template>
    <el-form
        size='mini'
        :inline="true"
        :model="filter"
        :rules="rules"
        ref="filter"
        label-width="80px"
        class="demo-filter"
    >
      <el-row type='flex' style='display:flex;flex-wrap:wrap'>
        <!-- <el-col :span="6"> -->
          <el-form-item label="姓名" prop="name">
              <el-input v-model="filter.name"></el-input>
          </el-form-item>
        <!-- </el-col> -->
        <!-- <el-col :span="6"> -->
          <el-form-item label="性别" prop="sex">
              <el-select v-model="filter.region" placeholder="请选择活动区域">
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="0"></el-option>
              </el-select>
          </el-form-item>
        <!-- </el-col> -->
        <!-- <el-col :span="6"> -->
          <el-form-item label="任职资格" prop="qualification">
              <el-select v-model="filter.jobId" placeholder="请选择活动区域">
              <el-option label="T1~T6" value="1"></el-option>
              <el-option label="低级" value="2"></el-option>
              <el-option label="中级" value="3"></el-option>
              <el-option label="高级" value="4"></el-option>
              <el-option label="管理" value="5"></el-option>
              </el-select>
          </el-form-item>
        <!-- </el-col> -->
        <!-- <el-col :span="6"> -->
          <el-form-item label="部门" prop="deptId">
              <el-select v-model="filter.deptId" placeholder="请选择活动区域">
              <el-option label="a" value="1"></el-option>
              <el-option label="b" value="2"></el-option>
              <el-option label="c" value="3"></el-option>
              <el-option label="d" value="4"></el-option>
              </el-select>
          </el-form-item>
        <!-- </el-col> -->
        <!-- <el-col :span="6"> -->
          <el-form-item label="岗位" prop="jobId">
              <el-select v-model="filter.jobId" placeholder="请选择活动区域">
              <el-option label="a" value="1"></el-option>
              <el-option label="b" value="2"></el-option>
              <el-option label="c" value="3"></el-option>
              <el-option label="d" value="4"></el-option>
              </el-select>
          </el-form-item>
        <!-- </el-col> -->
        <!-- <el-col :span="6"> -->
          <el-form-item label="时间" prop="date">
              <el-date-picker
                v-model="filter.date"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
          </el-form-item>
        <!-- </el-col> -->
      
        <!-- <el-col :span="6"> -->
          <el-form-item>
              <el-button type="primary" @click="submitForm('filter')">立即创建</el-button>
              <el-button @click="resetForm('filter')">重置</el-button>
          </el-form-item>
        <!-- </el-col> -->
          <el-button type="primary" @click="handleAdd()">新增员工</el-button>
      </el-row>
    </el-form>
</template>
<script>
  export default {
    name: 'employeeFilter',
    props: {
        filter: Object,
        handleSubmit: Function,
        handleAdd: Function
    },
    data() {
      return {
        filterValue: {...this.filter.fields}
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          this.handleSubmit(this.filterValue)
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
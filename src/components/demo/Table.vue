<template>
    <section>
      <!--工具条-->
      <el-col :span="24" class="toolbar">
        <el-form :inline="true">
          <el-form-item>
            <el-input  placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="getUser">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" >新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="24">
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort = "{prop: 'date', order: 'descending'}"
        >
          <el-table-column prop="date" label="日期" sortable width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" sortable width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址" :formatter="formatter">
          </el-table-column>
        </el-table>
      </el-col>
      <!--工具条-->
      <el-col :span="24" class="toolbar">
        <el-pagination background layout="prev, pager, next"  :page-size="20" :total="1000" style="float:right;">
        </el-pagination>
      </el-col>
    </section>
</template>

<script>
    import api from '../../api';
    export default {
        name: "Table",
        data() {
         return {
            tableData: []
          };
        },
        methods: {
          formatter:function(row, column) {
            return row.address;
          },
          getUser:function () {
           let data = api.getUser({});
           console.info(data);
          }
        }
    }
</script>

<style scoped>

</style>

<template>
  <div>
    <div v-show="!showForm">
      <gr-content-card v-apiauth:orgconfig :url="apiUrls.list">
        <gr-form inline>
          <gr-form-item label="机构编号">
            <gr-input placeholder="请输入机构编号" size="mini" v-model="queryForm.code"></gr-input>
          </gr-form-item>
          <gr-form-item label="机构名称">
            <gr-input placeholder="请输入机构名称" size="mini" v-model="queryForm.title"></gr-input>
          </gr-form-item>
          <gr-form-item>
            <gr-button @click="queryForm={}">重置</gr-button>
            <gr-button primary @click="doQuery" :disabled="loading">查询</gr-button>
          </gr-form-item>
        </gr-form>
      </gr-content-card>

      <gr-content-card ref="tableContainer">
        <gr-col ref="tableHeader">
          <gr-button type="primary" class="el-icon-document-add" v-apiauth:orgconfig :url="apiUrls.save"
            @click="showInfo('','create')">新增
          </gr-button>
          <gr-button type="danger" class="el-icon-delete" :disabled="loading" @click="doDelSelected" v-apiauth:orgconfig
            :url="this.apiUrls.delete">删除所选</gr-button>
        </gr-col>
        <gr-table autoMaxHeight :columns="tableColumn" :datas="tableData" v-loading="loading" pagination
          :current="current" :pageSize="pageSize" :total="recordCount" @currentChange="currentChange"
          @selectionChange="selectionChange">
          <gr-table-column label="操作" align="right">
            <template slot-scope="scope">
              <gr-button-group>
                <gr-button class="el-icon-view" type="primary" @click.native.prevent="showInfo(scope.row.id,'view')"
                  v-apiauth:orgconfig :url="apiUrls.info">查看</gr-button>
                <gr-button class="el-icon-edit" @click.native.prevent="showInfo(scope.row.id,'edit')"
                  v-apiauth:orgconfig :url="apiUrls.update" type="warning">修改</gr-button>
              </gr-button-group>
            </template>
          </gr-table-column>
        </gr-table>
      </gr-content-card>
    </div>
    <div v-show="showForm">
      <orgconfig-form :showForm.sync="showForm" :formData="formData" :formType.sync="formType" @loadlist="getList">
      </orgconfig-form>
    </div>
  </div>
</template>

<script>
  import orgconfigForm from './orgconfig-form';

  import haveApiRight from '../../extends/utils/have-api-right';
  var ORG_API = require('@api/orgconfig');

  export default {
    name: 'orgconfig',
    components: {
      orgconfigForm
    },
    data() {
      return {
        queryForm: {
          code: '',
          title: ''
        },
        loading: true,
        current: 1,
        pageSize: 20,
        recordCount: 0,
        selectedIds: [],
        tableColumn: [{
          type: 'selection',
          width: '55'
        }, {
          label: '机构编号',
          key: 'code',
          width: '150'
        }, {
          label: '机构名称',
          key: 'title',
          width: '200'
          // sortable: true
        }, {
          label: '备注',
          key: 'remark',
          width: '200',
          hidden: true
        }],
        tableData: [],
        formData: {},
        formType: '',
        showForm: false,
        apiUrls: ORG_API.apiUrls
      };
    },
    beforeRouteEnter(to, form, next) {
      if (!haveApiRight('orgconfig', ORG_API.apiUrls.list)) {
        next('/forbbiden');
      } else {
        next();
      }
    },
    mounted() {
      this.getList();
    },
    methods: {
      getList(current) {
        this.loading = true;
        ORG_API.fetchList(Object.assign(this.queryForm, {
          pageSize: this.pageSize,
          pageIndex: current || 1
        })).then(data => {
          this.current = current || 1;
          this.tableData = data.list;
          this.recordCount = parseInt(data.total);
          this.loading = false;
        }).catch(msg => {
          this.loading = false;
          this.msgError(msg || '信息获取失败');
        });
      },
      doQuery() {
        if (this.loading) {
          return false;
        }
        this.getList();
      },
      currentChange(e) {
        this.getList(e);
      },
      selectionChange(e) {
        this.selectedIds = [];
        e.forEach(i => this.selectedIds.push(i.id));
      },
      doDelSelected() {
        if (this.selectedIds.length > 0) {
          this.msgConfirm('', '确定删除选择的数据？', (e) => {
            if (e === 'confirm') {
              this.loading = true;
              ORG_API.delList(this.selectedIds).then(() => {
                this.getList();
              }).catch(msg => {
                this.loading = false;
                this.msgError(msg || '数据提交失败');
              });
            }
          });
        }
      },
      showInfo(id, edit) {
        if (edit === 'create') {
          this.formType = 'create';
          this.formData = {};
          this.showForm = true;
          return;
        }
        ORG_API.getInfo(id).then(data => {
          this.formData = data;
          this.showForm = true;
          this.formType = edit;
          this.loading = false;
        }).catch(msg => {
          this.loading = false;
          this.msgError(msg || '信息获取失败');
        });
      }
    }
  };

</script>

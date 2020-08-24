<template>
  <gr-dialog :title="type==='view'?'查看':(type==='edit'?'修改':'新增')" :visible="showForm" @cancelClick="showList"
    @closeClick="showList" @okClick="doConfirm">
    <gr-form ref="dataForm" :model="formData" :rules="rules">
      <gr-form-item label="机构编号" prop="code">
        <gr-input v-model="formData.code" :readonly="type==='view'" show-word-limit :maxlength="10" style="width:400px">
        </gr-input>
      </gr-form-item>
      <gr-form-item label="机构名称" prop="title">
        <gr-input v-model="formData.title" :readonly="type==='view'" :maxlength="10" show-word-limit
          style="width:400px"></gr-input>
      </gr-form-item>
      <gr-form-item label="备注" prop="remark">
        <gr-input type="textarea" v-model="formData.remark" :readonly="type==='view'" :maxlength="100" show-word-limit
          style="width:400px"></gr-input>
      </gr-form-item>
    </gr-form>
  </gr-dialog>
</template>

<script>
  var ORG_API = require('@api/orgconfig');

  export default {
    name: 'orgconfigForm',
    props: {
      formData: Object,
      formType: String,
      showForm: Boolean
    },
    data() {
      return {
        apiUrls: ORG_API.apiUrls,
        type: '', // view,update,create
        loading: false,
        rules: {
          code: [{
              required: true,
              message: '请输入机构编码',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 10,
              message: '长度在 3 到 10 个字符',
              trigger: 'blur'
            }
          ],
          title: [{
              required: true,
              message: '请输入机构名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 10,
              message: '长度在 3 到 10 个字符',
              trigger: 'blur'
            }
          ]
        }
      };
    },
    watch: {
      formType(_new) {
        this.type = _new;
      }
    },
    mounted() {
      this.type = this.formType;
    },
    methods: {
      showList() {
        this.$emit('update:showForm', false);
      },
      doConfirm() {
        switch (this.type) {
          case 'create':
            this.doSave();
            break;
          case 'edit':
            this.doUpdate();
            break;
          default:
            this.showList();
        }
      },
      doSave() {
        this.$refs.dataForm.validate((valid) => {
          if (valid) {
            this.loading = true;
            ORG_API.saveInfo(this.formData).then(() => {
              this.$emit('loadlist', '');
              this.showList();
            }).catch(msg => {
              this.msgError(msg || '数据提交失败');
              this.loading = false;
            });
          }
        });
      },
      doUpdate() {
        this.$refs.dataForm.validate((valid) => {
          if (valid) {
            this.msgConfirm('', '确定修改该信息?', (e) => {
              if (e === 'confirm') {
                this.loading = true;
                ORG_API.updateInfo(this.formData).then(() => {
                  this.loading = false;
                  this.$emit('loadlist', '');
                  this.showList();
                }).catch(msg => {
                  this.msgError(msg || '数据提交失败');
                  this.loading = false;
                });
              }
            });
          }
        });
      }
    }
  };

</script>

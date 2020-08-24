<template>
  <div class="upload-div" :class="{'holder':showHolder}">
    <el-upload ref="upload" :list-type="showHolder?'picture-card':''" :action="action" :on-success="handleSuccess"
      :before-upload="handleBeforeUpload" :on-change="onChange" :on-remove="handleRemove" :auto-upload="autoUpload"
      :accept="accept" :headers="headers" :limit="1" :on-error="handleError" :file-list="fileList">
      <slot></slot>
      <div class="cover" v-if="showHolder">
        <div class="cross">
          <i class="el-icon-plus"></i>
        </div>
        <div class="holder">
          <div class="bgholder" :class="{'no-tip':!uploaderText}" :style="`background-image:url(${bgImg})`"></div>
          <div class="tips" v-if="uploaderText">{{uploaderText}}</div>
        </div>
      </div>
      <div slot="file" v-if="showHolder" slot-scope="{file}">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
      <div v-else class="noholder">
      </div>
    </el-upload>
  </div>
</template>
<script>
  import {
    Upload
    // Dialog
  } from 'element-ui';
  import bgImg from './upload_bg.png';
  export default {
    name: 'GrUpload',
    components: {
      ElUpload: Upload
      // ElDialog: Dialog
    },
    props: {
      autoUpload: {
        type: Boolean,
        default: false
      },
      action: {
        type: String
      },
      showFileList: {
        type: Boolean,
        default: false
      },
      accept: {
        type: String,
        default: 'image/jpeg image/png image/jpg image/bmp'
      },
      fileTypeErrMsg: {
        type: String
      },
      headers: {
        type: Object,
        required: false
      },
      isClear: {
        type: Boolean,
        default: true
      },
      uploaderText: String,
      disabled: Boolean,
      size: String,
      fileList: {
        type: Array
      }
    },
    data() {
      return {
        bgImg,
        fileCount: 0
      };
    },
    computed: {
      showHolder() {
        return !this.$slots.default;
      },
      holderClass() {
        var size = this.size || (this.$GRUI || {}).size;
        var classes = ['holder',
          (size === 'mini' ? 'holder--' + size : '')
        ];
        return classes.join(' ').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      }
    },
    methods: {
      handleSuccess(res, file) {
        this.fileCount++;
        this.$emit('onSuccess', res, file);
      },
      handleError() {
        this.msgError('上传失败');
      },
      handleBeforeUpload(file) {
        this.$emit('beforeUpload', file);
      },
      onChange(file, fileList) {
        this.$emit('onChange', file, fileList);
        if (this.accept) {
          if (this.accept.indexOf(file.raw.type) === -1) {
            this.msgError('文件类型错误');
            return false;
          }
        }
      },
      handleRemove(file, fileList) {
        this.$emit('remove');
        this.$refs.upload.clearFiles();
        this.fileCount = 0;
      },
      handlePictureCardPreview(file) {
        this.$emit('showViewer', file.url);
      },
      submit() {
        // 手动上传通过refs调用submit方法
        this.$refs.upload.submit();
      }
    },
    watch: {
      isClear(newVal, oldVal) {
        if (newVal === true) {
          this.handleRemove();
        }
      }
    }
  };

</script>
<style scoped lang="less">
  .upload-div.holder {
    width: 108px;
    min-width: 108px;
    height: 108px;
    // overflow: hidden;
    border: 1px dashed #c0ccda;
    border-radius: 6px;

    /deep/ .el-upload--picture-card {
      border: none;
    }

    .cover {
      width: 100%;
      height: 100%;
      position: relative;

      .cross {
        width: 100%;
        height: 100%;

        .el-icon-plus {
          position: absolute;
          top: 36px;
          left: 36px;
          margin: 0 auto;
          z-index: 1;
        }
      }

      .holder {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;

        .bgholder {
          // width: 90px;
          padding: 0 9px;
          height: 70px;
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
          margin: 10px auto 0 auto;
          background-color: #fff;

          &.no-tip {
            height: 80px;
          }
        }

        .tips {
          width: 100%;
          font-size: 12px;
          color: #999;
          height: 24px;
          line-height: 24px;
          margin-top: 2px;
        }
      }
    }

    /deep/ .el-upload-list__item.is-ready {
      width: 100%;
      height: 108px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;

      img {
        max-width: 100px;
        height: auto;
        max-height: 100px;
        width: auto;
        margin-top: 5px;
      }
    }

  }

  /deep/ .el-upload-list__item {
    margin: 0;
  }

  /deep/ .el-upload-list--picture-card .el-upload-list__item {
    width: 100%;
    height: 100%;
  }

  /deep/ .el-upload-list__item.is-success div,
  /deep/ .el-upload-list__item.is-uploading div {
    height: 80px !important;
  }

  /deep/ .el-upload--picture-card {
    width: 100%;
    height: 100%;
  }

  /deep/ .el-upload-list--picture-card {
    position: absolute;
    top: 0px;
    z-index: 999;
    width: 100%;
  }

  /deep/ .el-upload-list__item.is-uploading {
    height: 80px;
  }

  /deep/ .el-upload-list--picture-card .el-upload-list__item-actions {
    height: 80px;
  }

  /deep/ .el-upload {
    display: block;
  }

</style>

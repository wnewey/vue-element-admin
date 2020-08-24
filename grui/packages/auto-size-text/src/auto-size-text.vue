<template>
  <div :id="id" class="auto-size" :style="`font-size:${finalFontSize};`">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GrAutoSizeText',
    props: {
      fontSize: {
        type: String,
        require: true
      },
      minFontSize: {
        type: String,
        default: '12px'
      },
      lineWidth: {
        type: String,
        require: true
      }
    },
    data() {
      return {
        id: 'auto_size_text_' + Number((Math.random() + '').substring(2)).toString(36),
        finalFontSize: this.fontSize
      };
    },
    computed: {
      contentLength() {
        return document.querySelector('#' + this.id).innerText.replace(/[\u0391-\uFFE5]/g, 'aa').length / 2;
      }
    },
    methods: {
      resizeFontSize() {
        var srcFontSize = parseInt(this.fontSize);
        var minFontSize = parseInt(this.minFontSize);
        var fontSize = srcFontSize;
        var destFont = parseInt(parseInt(this.lineWidth) / this.contentLength);
        if (destFont < srcFontSize) {
          fontSize = destFont;
        }
        if (destFont < minFontSize) {
          fontSize = minFontSize;
        }
        this.finalFontSize = fontSize + 'px';
      }
    },
    updated() {
      this.resizeFontSize();
    },
    mounted() {
      this.resizeFontSize();
    }
  };

</script>

<style scoped>
  .auto-size {
    white-space: nowrap;
    word-wrap: none;
    overflow: hidden;
  }

</style>

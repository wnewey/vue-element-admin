<template>
  <bm-overlay class="cumstomLayerStyle" pane="labelPane" @draw="draw" @mouseover.native="handleMouseOver"
    @mouseleave.native="handleMouseLease" :style="`width:${width}px;height:${width}px;line-height:${width}px;`">
    <div style="position:relative" @click="handleClick">
      <div v-text="datas.value"></div>
      <div v-show="showTip" class="tip-div" :style="`left:${-width}px;bottom:${width + 10}px`">{{datas.stationName}}</div>
      <div v-show="showTip" class="arrow" :style="`bottom:${width}px`">&nbsp;</div>
    </div>
  </bm-overlay>
</template>
<script>
  import Overlay from 'vue-baidu-map/components/overlays/Overlay';
  import BmMarker from 'vue-baidu-map/components/overlays/Marker';

  export default {
    name: 'GrOverlay',
    components: {
      BmOverlay: Overlay,
      BmMarker
    },
    props: {
      datas: {
        type: Object
      }
    },
    data() {
      return {
        width: '',
        tipBottom: 0,
        tipLeft: 0,
        showTip: false
      };
    },
    mounted() {},
    methods: {
      handleClick() {},
      draw(Event) {
        const {
          BMap,
          map,
          el
        } = Event;

        const pixel = map.pointToOverlayPixel(new BMap.Point(this.datas['baiDuLng'], this.datas['baiDuLat']));
        if (!this.width) {
          this.width = el.offsetWidth;
        }

        el.style.opacity = 1;
        el.style.left = pixel.x - this.width / 2 + 'px';
        el.style.top = pixel.y - this.width / 2 + 'px';
      },
      handleMouseOver(v) {
        this.showTip = true;
      },
      handleMouseLease(v) {
        this.showTip = false;
      }
    }
  };

</script>

<style scoped lang="less">
  @import "../../../theme/color.less";

  .cumstomLayerStyle {
    background: #FF6B59;
    // box-shadow: 0 0 5px #FF6B59;
    color: #fff;
    text-align: center;
    padding: 5px;
    border-radius: 50%;
    position: absolute;
    opacity: 0;
    border: 2px solid #fff;
  }

  .tip-div {
    position: absolute;
    height: 20px;
    line-height: 20px;
    padding: 12px 20px;
    box-shadow: 1px 1px 5px #888888;
    border-radius: 4px;
    background-color: @modeBdColor;
    color: @contentColor;
    width: max-content;
    z-index: 501;
  }

  .arrow {
    position: absolute;
    z-index: 501;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: solid;
    border-color: @modeBdColor transparent transparent transparent;
  }

</style>

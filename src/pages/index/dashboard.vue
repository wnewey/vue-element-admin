<template>
  <div class="dashboard-container">
    <div class="chart-container" ref="line"></div>
    <div class="chart-container" style="margin-right:0" ref="myEchart"></div>
  </div>
</template>
<script>
  import echarts from 'echarts';
  import '../../../node_modules/echarts/map/js/province/guangdong'; // 引入中国地图数据

  export default {
    name: 'index',
    data() {
      return {
        chart: null,
        citys: ['广州市', '佛山市', '清远市', '东莞市', '惠州市', '江门市', '韶关市', '河源市', '梅州市', '揭阳市', '潮州市', '汕头市', '汕尾市', '深圳市',
          '中山市', '珠海市', '肇庆市', '云浮市', '湛江市', '茂名市', '阳江市'
        ]
      };
    },
    computed: {
      data() {
        var data = [];
        this.citys.forEach(e => {
          data.push({
            name: e,
            value: parseInt((Math.random() * 1000))
          });
        });

        data.sort((val1, val2) => {
          return val1.value - val2.value;
        });
        return data;
      }
    },
    mounted() {
      this.chinaConfigure();
      this.lineConfig();
      console.log(2);
      window.onresize = () => {
        console.log(1);
        this.chinaConfigure();
        this.lineConfig();
      };
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
    created() {},
    methods: {
      lineConfig() {
        let lineChart = echarts.init(this.$refs.line); // 这里是为了获得容器所在位置
        window.onresize = lineChart.resize;
        lineChart.setOption({ // 进行相关配置
          // backgroundColor: '#ffffff',
          tooltip: {}, // 鼠标移到图里面的浮动提示框
          title: {},
          series: [{
            name: '警报次数', // 浮动框的标题
            type: 'pie',
            radius: [30, 110],
            center: ['50%', '50%'],
            roseType: 'area',
            data: this.data
          }]
        });
      },
      chinaConfigure() {
        let myChart = echarts.init(this.$refs.myEchart); // 这里是为了获得容器所在位置
        window.onresize = myChart.resize;
        myChart.setOption({ // 进行相关配置
          // backgroundColor: '#ffffff',
          tooltip: {}, // 鼠标移到图里面的浮动提示框
          dataRange: {
            show: false,
            min: 0,
            max: 1000,
            text: ['High', 'Low'],
            realtime: true,
            calculable: true,
            color: ['orangered', 'yellow', 'lightskyblue']
          },
          geo: { // 这个是重点配置区
            map: '广东', // 表示中国地图
            roam: false, // 缩放
            label: {
              normal: {
                show: false, // 是否显示对应地名
                textStyle: {
                  color: 'rgba(0,0,0,0.4)'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: 'rgba(255, 0, 0, 0.2)'
              },
              emphasis: {
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          series: [{
              type: 'scatter',
              coordinateSystem: 'geo', // 对应上方配置
              center: ['50%', '50%']
            },
            {
              name: '警报次数', // 浮动框的标题
              type: 'map',
              geoIndex: 0,
              data: this.data
            }
          ]
        });
      }
    }
  };

</script>

<style scoped lang="less">
  .dashboard-container {
    display: flex;
    justify-content: space-between;
  }

  .chart-container {
    height: 400px;
    width: 50%;
    background: #fff;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

</style>

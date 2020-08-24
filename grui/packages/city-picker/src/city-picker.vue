<template>
  <div class="picker-panel">
    <gr-select class="select" v-if="!hideProvince" :disabled="disableProvince" :placeholder="placeholders.province"
      :options="curProvinceList" v-model="curProvince" @change="change('province')"></gr-select>
    <gr-select class="select" v-if="!hideCity" :disabled="disableCity" :placeholder="placeholders.city"
      :options="curCityList" v-model="curCity" @change="change('city')">
    </gr-select>
    <gr-select class="select" v-if="!hideArea" :disabled="disableArea" :placeholder="placeholders.area"
      :options="curAreaList" v-model="curArea" @change="change('area')">
    </gr-select>
  </div>
</template>

<script>
  import GrSelect from '../../select';

  export default {
    name: 'GrCityPicker',
    components: {
      GrSelect
    },
    props: {
      all: Boolean,
      hideProvince: Boolean,
      hideCity: Boolean,
      hideArea: Boolean,
      disableProvince: Boolean,
      disableCity: Boolean,
      disableArea: Boolean,
      province: [String, Number],
      city: [String, Number],
      area: [String, Number],
      placeholders: {
        type: Object,
        default () {
          return {
            province: '选择省',
            city: '选择市',
            area: '选择区'
          };
        }
      }
    },
    data() {
      return {
        curProvince: '',
        curCity: '',
        curArea: '',
        curProvinceList: {},
        curCityList: {},
        curAreaList: {}
      };
    },
    computed: {
      cityData() {
        if (this.all) {
          return require('./data-all').default;
        }
        return require('./data-guangdong').default;
      }
    },
    watch: {
      province(val) {
        if (val) {
          this.curProvince = val;
          this.curCityList = this.cityData[val];
        }
      },
      city(val) {
        if (val) {
          this.curCity = val;
        }
      }
    },
    methods: {
      change(type) {
        if (type === 'province') {
          this.curCityList = this.cityData[this.curProvince];
          this.curCity = '';
        }
        this.curAreaList = this.cityData[this.curCity];

        if (type !== 'area') {
          this.curArea = '';
        }

        var data = {
          province: {
            code: '',
            name: ''
          },
          city: {
            code: '',
            name: ''
          },
          area: {
            code: '',
            name: ''
          }
        };

        if (this.curProvince) {
          data.province.code = this.curProvince;
          data.province.name = this.curProvinceList[this.curProvince];

          if (this.curCity) {
            data.city.code = this.curCity;
            data.city.name = this.curCityList[this.curCity];

            if (this.curArea) {
              data.area.code = this.curArea;
              data.area.name = this.curAreaList[this.curArea];
            }
          }
        }
        this.$emit('change', data);
        this.$emit('input', data);
      }
    },
    created() {
      this.curProvinceList = this.cityData['100000'];
      if (this.province) {
        this.curProvince = this.province;
        this.change('province');

        if (this.city) {
          this.curCity = this.city;
          this.change('city');
        }

        if (this.area) {
          this.curArea = this.area;
          this.change('area');
        }
      }
    }
  };

</script>

<style lang="less" scoped>
  .picker-panel {
    .select {
      margin-right: 5px;
    }
  }

</style>

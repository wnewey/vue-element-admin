# Icon
  icon：字体图标
  
  icon-svg:svg 图标

## icon

<div style="display:flex;flex-wrap:wrap;padding:10px 0">
  <div v-for="icon in glyphs" style="width:100px;text-align:center;margin:0 10px 10px 0">
  <div style="height:50px;padding:5px">
      <gr-icon :name="icon.font_class" style="font-size:50px;"/>
  </div>
  <div style="font-size:14px;margin-top:10px;">
    <div>{{icon.name}}</div>
    <div>{{icon.font_class}}</div>
  </div>
  </div>
</div>

```vue
<gr-icon name="setting" />
```

+ 可通过 font-size,color 来设置大小和颜色
+ 兼容性良好，支持 IE8+，及所有现代浏览器。
+ 相比于 Unicode 语意明确，书写更直观。可以很容易分辨这个 icon 是什么。
+ 因为使用 class 来定义图标，所以当要替换图标时，只需要修改 class 里面的 Unicode 引用。
+ 不过因为本质上还是使用的字体，所以不支持多色图标。

## icon-svg

<div style="display:flex;flex-wrap:wrap;padding:10px 0">
  <div v-for="icon in glyphs" style="width:100px;text-align:center;margin:0 10px 10px 0">
    <div style="height:50px;padding:5px">
      <gr-icon-svg :name="icon.font_class" style="font-size:50px;"/>
    </div>
    <div style="font-size:14px;margin-top:10px;">
      <div>{{icon.name}}</div>
      <div>{{icon.font_class}}</div>
    </div>
  </div>
</div>

```vue
<gr-icon-svg name="setting" />
```

+ 可通过 font-size设置大小，不能直接通过 color 修改颜色
+ 支持多色图标了，不再受单色限制。
+ 兼容性较差，支持 IE9+，及现代浏览器。
+ 浏览器渲染 SVG 的性能一般，还不如 png。

<script>

  import fontJson from '../../grui/packages/icon/src/iconfont/iconfont.json'
  export default {
    data() {
      return fontJson
    }
  };
</script>

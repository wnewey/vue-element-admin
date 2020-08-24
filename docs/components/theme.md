
# 字体与配色
 
 + 设计稿中使用微软雅黑，实际开发中使用客户端默认字体，注意字体版权问题;
 + 字体实际使用时默认字体常规为：Regular，少数情况需要突出强调时可使用Medium、Bold;
 + 段落行高为字体高度的1.5倍。

 **见theme/color.less、theme/fontsize.less文件**

## 字体
<div style="font-family:Microsoft YaHei;line-height:50px;">
 <template v-for="(item,index) in fonts">
  <div :key="index" :style="`display:flex;justify-content:space-between;font-weight:${item[1]};font-size:${item[2]}px;color:${item[3]}`">
    <div style="width:160px">{{item[0]}}</div>
    <div style="width:120px">{{item[1]=="600"?"Bold":(item[1]=="500"?"Medium":"Regular")}}</div>
    <div style="width:120px">{{item[2]}}px</div>
    <div style="width:120px">{{item[3]}}</div>
  </div>
 </template>
</div>   

## 颜色
#### 1. 按钮颜色
<div style="padding-top:10px;display: flex;justify-content: space-between;flex-wrap:wrap">
  <div  v-for="item in buttonColors" style="display:flex;height:70px;width:300px;margin-bottom:10px">
    <div :style="`width:70px;border-radius:4px;background:${item[1]}`"></div>
    <div style="margin-left: 10px;display: flex;flex-direction: column;justify-content: space-between;">
      <div style="font-weight:500">{{item[0]}}</div>
      <div style="">{{item[1]}}</div>
      <div style="font-size:12px;color:#585858">{{item[2]}}</div>
    </div>
  </div>
</div>

#### 2. 文字颜色
<div style="padding-top:10px;display: flex;justify-content: space-between;flex-wrap:wrap">
  <div  v-for="item in fontColors" style="display:flex;height:70px;width:300px;margin-bottom:10px">
    <div :style="`width:70px;border-radius:4px;background:${item[1]}`"></div>
    <div style="margin-left: 10px;display: flex;flex-direction: column;justify-content: space-between;">
      <div style="font-weight:500">{{item[0]}}</div>
      <div style="">{{item[1]}}</div>
      <div style="font-size:12px;color:#585858">{{item[2]}}</div>
    </div>
  </div>
</div>

#### 3. 背景边框颜色
<div style="padding-top:10px;display: flex;justify-content: space-between;flex-wrap:wrap">
  <div  v-for="item in bgColors" style="display:flex;height:70px;width:300px;margin-bottom:10px">
    <div :style="`width:70px;border-radius:4px;background:${item[1]}`"></div>
    <div style="margin-left: 10px;display: flex;flex-direction: column;justify-content: space-between;">
      <div style="font-weight:500">{{item[0]}}</div>
      <div style="">{{item[1]}}</div>
      <div style="font-size:12px;color:#585858">{{item[2]}}</div>
    </div>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        fonts:[
          ["重点数字文字","600","26","#333333"],
          ["页面标题文字","500","18","#333333"],
          ["板块标题文字","500","16","#333333"],
          ["弹框标题文字","500","16","#333333"],
          ["导航列表标题文字","400","14","#333333"],
          ["正文文字","400","14","#585858"],
          ["辅助文字","400","14","#999999"],
          ["禁用及占位符文字","400","14","#bbbbbb"],
          ["超链及按钮文字","400","14","#4c8aeb"],
          ["提醒说明文字","400","14","#ff5a5a"],
          ["页面提示文字","400","12","#666666"],
        ],
        buttonColors:[
          ["默认色","#df863c","用于按钮、主色块的默认状态"],
          ["悬停色","#f48a4b","用于按钮、主色块的悬停状态"],
          ["点击色","#df8a4b","用于按钮、主色块的点击状态"],
          ["按钮背景色","#EEFAF3","用于次要按钮背景"],
        ],
        fontColors:[
          ["标题文字","#333333","用于标图、突出内容"],
          ["正文文字","#585858","用于正文内容"],
          ["页面提示","#666666","用于页面提示内容"],
          ["辅助文字","#999999","用于辅助性内容"],
          ["占位符文字","#BBBBBB","用于禁用、占位符文字内容"],
          ["提醒说明文字","#FF5A5A","用于提醒、说明性文字"],
          ["超链接文字","#4C8AEB","用于辅助性内超链接及按钮文字"],
        ],
        bgColors:[
          ["背景色","#F2F2F6","用于整个系统的背景色"],
          ["表格标题栏色","#FBFBFC","用于表格标题栏背景色"],
          ["左侧导航栏背景色","#444444","用于左侧导航栏背景色"],
          ["输入框边框色","#CCCCCC","用于输入框、此按钮边框色"],
          ["表格边框","#E5E5E5","用于区分表格的边框"],
        ]
      }
    }
  }
</script>
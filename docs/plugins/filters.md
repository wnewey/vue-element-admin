# Filters

## price

<gr-content-card>
 <div>普通格式化：{{12345|price}} </div>
 <div>添加千分位：{{12345|price(true)}}</div>
</gr-content-card>

```vue
<div>普通格式化：{{12345|price}} </div>
<div>添加千分位：{{12345|price(true)}}</div>
```

## dateFormat

<gr-content-card>
 <div>默认(当前时间 yyyy-MM-dd HH:mm:ss)：{{''|dateFormat}} </div>
 <div>自定格式:{{''|dateFormat("yyyy-MM-dd")}}</div>
 <div>自定格式:{{'20201212'|dateFormat("yyyy-MM-dd")}}</div>
 <div>自定格式:{{'20200101000000'|dateFormat("yyyy-MM-dd HH:mm:ss")}}</div>
 <div>自定格式:{{'2020-01-01 00:00:00'|dateFormat("yyyy-MM-dd")}}</div>
 <div>自定格式:{{'2020/01/01'|dateFormat("yyyy-MM-dd HH:mm:ss")}}</div>
 <div>时间戳:{{1582197154457|dateFormat("yyyy-MM-dd HH:mm:ss")}}</div>
</gr-content-card>

```vue
 <div>默认(当前时间 yyyy-MM-dd HH:mm:ss)：{{''|dateFormat}} </div>
 <div>自定格式:{{''|dateFormat("yyyy-MM-dd")}}</div>
 <div>自定格式:{{'20201212'|dateFormat("yyyy-MM-dd")}}</div>
 <div>自定格式:{{'20200101000000'|dateFormat("yyyy-MM-dd HH:mm:ss")}}</div>
 <div>自定格式:{{'2020-01-01 00:00:00'|dateFormat("yyyy-MM-dd")}}</div>
 <div>自定格式:{{'2020/01/01'|dateFormat("yyyy-MM-dd HH:mm:ss")}}</div>
 <div>自定格式:{{1582197154457|dateFormat("yyyy-MM-dd HH:mm:ss")}}</div>
```

## hidemobile

<gr-content-card>
 <div>格式化：{{'13612345678'|hidemobile}} </div>
</gr-content-card>

```vue
<div>格式化：{{'13612345678'|hidemobile}} </div>
```

## datadict

<gr-content-card>
 <div>数据字典转换status：{{'0'|datadict('status')}}</div>
 <div>数据字典转换accountType：{{'0'|datadict('accountType')}}</div>
</gr-content-card>

```vue
<div>数据字典转换status：{{'0'|datadict('status')}}</div>
<div>数据字典转换accountType：{{'0'|datadict('accountType')}}</div>
```

# Utils

## request

网络请求，封装到 api

```js
import http from "~/src/extends/plugins/request";

// post同 get
```
应用可实际再包装一层或注入到全局方法

## dateFormat
```js
import dataFormat from "~/src/extends/utils/dateFormat";
```

同Filters->dateFormat

## random

```js
import random from "~/src/extends/utils/random";

random.random(digit); // 产生随机字符串，位数默认6；
random.randomNumber(digit); // 产生随机数字，位数默认6；
```
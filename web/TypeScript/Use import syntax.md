
## 使用 import 语法

修改 `components.ts` 文件

写成 `ES6` 的 `export` 导出模式

```js
export class Header {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Header";
    document.body.appendChild(elem);
  }
}

export class Content {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Content";
    document.body.appendChild(elem);
  }
}

export class Footer {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Footer";
    document.body.appendChild(elem);
  }
}
```

三个类就都已经用`export`导出了，也就是说可以实现用`import`进行引入了

`修改 page.ts 文件`

`````typescript
import { Header, Content, Footer } from "./components";
export class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
`````

`tsc`进行编译

可以看到编译好的代码都是`define`开头

这种代码在浏览器中是没办法被直接运行

需要其他库(`require.js`)

**Require.js 的 CDN 地址： https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js**

### 引入 require.js

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js"></script>
```

这时候就可以解析`define`这样的语法 

`page.ts`中加入`default`关键字，如果不加是没办法直接引用到的。

`tsc`进行编译一下

`export default`这种形式的语法，需要在`html`里用`require`来进行引入。

### require 方式引入

因为你已经加入了`require.js`这个库，所以现在可以直接在代码中使用`require`了

```typescript
<body>
  <script>
    require(["page"], function (page) {
      new page.default();
    });
  </script>
</body>
```

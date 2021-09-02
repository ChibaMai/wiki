
## 命名空间

`TSWeb` 空文件

1. 建立好文件夹后，打开 VSCode，把文件夹拉到编辑器当中，然后打开终端，运行`npm init -y`,创建`package.json`文件。

2. 生成文件后，我们接着在终端中运行`tsc -init`,生成`tsconfig.json`文件。

3. 新建`src`和`build`文件夹，再建一个`index.html`文件。

4. 在`src`目录下，新建一个`page.ts`文件，这就是我们要编写的`ts`文件了。

5. 配置`tsconfig.json`文件，设置`outDir`和`rootDir`(在 15 行左右)，也就是设置需要编译的文件目录，和编译好的文件目录。

   `````json
   "outDir": "./build",     
   "rootDir": "./src", 
   `````

   

6. 然后编写`index.html`，引入`<script src="./build/page.js"></script>`,当让我们现在还没有`page.js`文件。

7. 编写`page.ts`文件，加入一句输出`console.log('kiven.com')`,再在控制台输入`tsc`,就会生成`page.js`文件

8. 再到浏览器中查看`index.html`文件，如果按`F12`可以看到`kiven.com`，说明我们的搭建正常了。

`````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="./build/page.js"></script>
    <title>Document</title>
  </head>
  <body></body>
</html>
`````

`TypeScript`来进行编写

### 没有命名空间

用类的形式在`index.html`中实现`header`,`content`和`Footer`部分，类似我们常说的模板。

`page.ts`

````typescript
class Header {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Header";
    document.body.appendChild(elem);
  }
}

class Content {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Content";
    document.body.appendChild(elem);
  }
}

class Footer {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Footer";
    document.body.appendChild(elem);
  }
}

class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
````

`tsc`进行编译

修改`index.html`文件  `<body>`标签里引入`<script>`标签，并实例化`Page

``````html
<body>
  <script>new Page();</script>
</body>
``````

`./build/page.js`文件可以看出全部都是`var`声明的变量）。

**过多的全局变量会让我们代码变的不可维护**

只要有`Page`这个全局变量就足够了，剩下的可以模块化封装起来，不暴露到全局。

### 命名空间的使用

`命名空间`这个语法，很类似编程中常说的模块化思想

比如`webpack`打包时

命名空间声明的关键词是`namespace` 比如声明一个`namespace Home`,需要暴露出去的类，可以使用`export`关键词

````````typescript
namespace Home { 

  class Header { 
    constructor() { 
      const elem = document.createElement('div')
      elem.innerHTML = "This is Header"
      document.body.appendChild(elem);
    }
  }
  
  class Content { 
    constructor() { 
      const elem = document.createElement('div')
      elem.innerHTML = "This is Content"
      document.body.appendChild(elem);
    }
  }
  
  class Footer { 
    constructor() { 
      const elem = document.createElement('div')
      elem.innerHTML = "This is Footer"
      document.body.appendChild(elem);
    }
  }
  
  // 实例化
  export class Page { 
    constructor() { 
      new Header();
      new Content();
      new Footer();
    }
  }
  
}

````````

TS 代码写完后，再到`index.html`文件中进行修改，用命名空间的形式进行调用，就可以正常了。 

写完后，记得用`tsc`编译一下，当然你也可以使用`tsc -w`进行监视了，只要有改变就会进行重新编译。

`````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 引入 -->
    <script src="./build/page.js"></script>
    <title>Document</title>
  </head>
  <body>
    <!-- 引入自定义标签 -->
    <script>
      new Home.Page()
    </script>

  </body>
</html>
`````

浏览器中进行查看  可以看到现在就只有`Home.Page`

其他的`Home.Header`...这些都是得不到的

只有`Home.Page`是全局的，其他的都是模块化私有的。

### 深入命名空间

单独写一个`components`的文件，然后进行组件化。

在`src`目录下新建一个文件`components.ts`

`````typescript
namespace Components {
  //导出组件
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
}
`````

导出后就可以在`page.ts`中使用这些组件

`````typescript
namespace Home {
  export class Page {
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
  }
}
`````

`tsc`进行重新编译

必须要在`index.html`里进行引入`components.js`文件

`````typescript
<script src="./build/page.js"></script>
<script src="./build/components.js"></script>
`````

**多文件编译成一个文件**

打开`tsconfig.json`文件，然后找到`outFile`配置项

如果设置了它，就不再支持`"module":"commonjs"`

改成`"module":"amd"`

`````typescript
{
  "outFile": "./build/page.js"
}
`````

配置好后，删除掉`build`下的`js`文件，然后用`tsc`进行再次编译。

删掉`index.html`文件中的`component.js`  可以正常运行

```````html
<!-- <script src="./build/components.js"></script> -->
<script src="./build/page.js"></script>
```````



### 子命名空间

````typescript
namespace Components {
  export namespace SubComponents {
    export class Test {}
  }

  //someting ...
}
````

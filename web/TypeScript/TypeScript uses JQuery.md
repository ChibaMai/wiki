
## Ts使用JQuery

TypeScript 的代码中使用其他类库

涉及到一个类型文件(Type file)的问题

### 引入 JQuery 框架库

在`TSTest`文件夹的`src`目录下，引入`JQuery`文件

这里采用`CDN`的形式进行引入

````typescript
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
````

有了 jquery 框架，就可以在`TypeScript`文件中进行使用`JQuery`的语法\

`page.ts`

````typescript
const teacher: string = "kiven";
console.log(teacher);

$(function () {
  alert("kiven");
});
````

#### 安装 types/jquery(解决方法)

第一种：就是安装别人写好的文件

npm 进行安装。

````typescript
npm i @types/jquery
````

第二种:简单粗暴`page.ts`

直接在`page.ts`文件的头部加入这句代码：

``````typescript
declare var $: any;
``````

第三种：自己写一个`.d.ts`声明文件的类库

## tsconfig.json

### 生成 tsconfig.json 文件

终端 输入 `tsc --init`

用来配置如何对`ts`文件进行编译的 typescript 的编译配置文件。

`demo.ts`

````typescript
const person: string = "kiven";
````

直接运行`tsc`命令，这时候`tsconfig.json`才起作用

·`tsconfig.json` 

`````json
 "removeComments": true,   //生成js 文件是否附带注释  
`````

### include 、exclude 和 files

只编译  一个固定文件

使用 include 配置

`tsconfing.json`

````json
{
  "include":["demo.ts"],
  "compilerOptions": {
      //any something
      //........
  }
}
````

使用 exclude 配置

`````json
{
   "exclude":["demo2.ts"],
  "compilerOptions": {
      //any something
      //........
  }
}
`````

`include`是包含的意思，`exclude`是不包含

使用 files 配置

```````json
{
  "files":["demo.ts"],
  "compilerOptions": {
      //any something
      //........
  }
}
```````

### compilerOptions 配置项

#### removeComments 属性

设置为`true`在`js`中不显示注释。



#### strict 属性

`strict`属性如果设置为`true`,要按照`TypeScript`最严格的规范来写

####  noImplicitAny 属性

`noImplicitAny`属性的作用是，允许你的注解类型 any 不用特意表明

设置为`noImplicitAny:true`,意思就是值就算是 any（任意值），你也要进行类型注释。

``````typescript
function Kiven(name: any) {
  return name;
}
``````



#### strictNullChecks 属性

`strictNullChecks`设置为`false`,它的意思就是，**不强制检查 NULL 类型。**

```````typescript
const kiven: string = null;
```````

配置了“不强制检验 null 类型”。如果你设成`strictNullChecks:true`，这时候就报错了。

#### rootDir 和 outDir

工作中我们希望打包的`js`都生成在特定的一个文件夹里,比如`build`。

这时候你就可以通过配置`outDir`来配置

所有的 `ts` 文件都放到 `src` 下

配置文件就应该这样写。

```````typescript
{
    "outDir": "./build" ,
    "rootDir": "./src" ,
}
```````

#### sourceMap 属性

Source map 就是一个信息文件，里面储存着位置信息。

也就是说，转换后的代码的每一个位置，所对应的转换前的位置。

有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码

#### noUnusedLocals 和 noUnusedParameters

开启`noUnusedLocals：true`，开启后我们的程序会直接给我们提示不能这样编写代码，有没有使用的变量。

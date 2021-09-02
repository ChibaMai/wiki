# TypeScript

**简介**

TypeScript 其实就是 JavaScript 的超集，也就是说 TypeScript 是建立在 JavaScript 之上的，最后都会转变成 JavaScript。

**必备依赖**

`node.js`

1. **全局安装 typeScript**

````bash
npm install typescript -g || yarn global add typescript
````

2. **建立项目目录和编译 TS 文件**

   `Demo1.ts`

   ````typescript
   function kiven() {
     let web: string = "Hello World";
     console.log(web);
   }
   
   kiven();
   ````

   cmd

   `tsc Demo1.ts`  转换

   `node Demo1.js`  输出 

3. **ts-node 的安装和使用**

   全局安装

   ````bash
   npm install -g ts-node
   ````

   命令中直接输入如下命令

   ```typescript
   ts-node Demo1.ts
   ```

   使用`ts-node`就可以直接看到编写结果


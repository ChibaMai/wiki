
## 用 Parcel 打包Ts代码

### 建立一个新项目

1. 新建立一个项目`TSTest`
2. 打开终端，输入`npm init -y`,创建`package.json`文件
3. 在终端中输入`tsc --init`,创建`tsconfig.json`文件
4. 修改`tsconfig.json`配置`rootDir`和`outDir`.
5. 新建`src`文件夹，在里边建立`index.html`,`page.ts`文件
6. 编写`index.html`文件，并引入`page.ts`文件
7. 编写`page.ts`文件。

`index.html` 文件代码：

`````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="./page.ts"></script>
    <title>Document</title>
  </head>
  <body></body>
</html>
`````

`page.ts` 文件代码：

````typescript
const teacher: string = "kiven";
console.log(teacher);
````

这时候我们并不能正常的预览出效果

需要`Parcel`

### Parcel 的安装和使用

````typescript
yarn add --dev parcel@next
````

安装好以后，打开`package.json`文件

实例版本`^2.0.0-beta.1`

`package.json`

````json
{
  "scripts": {
    "test": "parcel ./src/index.html"
  },
}
````

使用`parcel`对`index.html`进行编译

终端输入`yarn test`

这说明`Parcel`会自动对`index.html`中引入的`TypeScript`文件进行编译


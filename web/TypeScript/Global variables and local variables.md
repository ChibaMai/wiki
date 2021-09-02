### 全局变量and局部变量

- **局部变量**：函数体内定义的变量就是局部变量。
- **全局变量**: 函数体外 定义的变量就是全局变量。

#### 局部变量和全局变量重名

当局部变量与全局变量重名的时候，在函数体内是局部变量起作用；如果重名，就有变量提升

#### let关键字变量的作用域

作用域的划分是以一对大括号作为界限的

使用let关键字的变量就是一个块级作用域变量

`````typescript
function zhengXing():void{
   var yangzia:string = '刘德华'
   {
        let  yangzib:string = '小沈阳'
        console.log('凯文整形成了'+yangzib+'的样子')
   }

    console.log('凯文整形成了'+yangzia+'的样子')
    console.log('凯文整形成了'+yangzib+'的样子')
}
zhengXing()
`````

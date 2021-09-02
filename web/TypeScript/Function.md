## 函数

### 定义函数

`````js
function searchXiaoJieJie(age:number):string{
    return '找到了'+age+'岁的小姐姐' 
}
var age:number = 18
var result:string = searchXiaoJieJie(age)
console.log(result)
`````

需要注意的是：

1. 声明（定义）函数必须加 function 关键字；
2. 函数名与变量名一样，命名规则按照标识符规则；
3. 函数参数可有可无，多个参数之间用逗号隔开；
4. 每个参数参数由名字与类型组成，之间用分号隔开；
5. 函数的返回值可有可无，没有时，返回类型为 void；
6. 大括号中是函数体。

### 形参和实参

#### 形参的使用

定义了形参也就规定了此函数的参数个数和参数类型，规范了函数。

````typescript
function searchXiaoJieJie(age:number):string{
    return '找到了'+age+'岁的小姐姐' 
}
````

#### 实参的使用

`````typescript
var result:string = searchXiaoJieJie(age)
`````

每一个实参的类型要与对应的形参类型一致。

### 函数参数

函数的形参分为：可选形参、默认形参、剩余参数形参等。

1. 可选参数的函数

   这种参数，在定义函数的时候通过`?`标注。

   `````typescript
   function searchXiaoJieJie2(age:number,stature?:string):string{
   
       let yy:string = ''
       yy = '找到了'+age+'岁'
       if(stature !=undefined){
           yy = yy + stature
       }
       return yy+'的小姐姐'
   
   }
   
   var result:string  =  searchXiaoJieJie2(22,'大长腿')
   console.log(result)
   `````

2. **有默认参数的函数**

   不传递参数的时候，给一个默认值，而不是`undefined`

   ````typescript
   function searchXiaoJieJie2(age:number=18,stature:string='大胸'):string{
   
       let yy:string = ''
       yy = '找到了'+age+'岁'
       if(stature !=undefined){
           yy = yy + stature
       }
       return yy+'的小姐姐'
   
   }
   
   var result:string  =  searchXiaoJieJie2()
   console.log(result)
   ````

3. **有剩余参数的函数**

   传递给函数的参数个数不确定。

   `````typescript
   function searchXiaoJieJie3(...xuqiu:string[]):string{
   
       let  yy:string = '找到了'
       for (let i =0;i<xuqiu.length;i++){
           yy = yy + xuqiu[i]
           if(i<xuqiu.length){
               yy=yy+'、'
           }
       }
       yy=yy+'的小姐姐'
       return yy
   
   }
   
   var result:string  =  searchXiaoJieJie3('22岁','大长腿','瓜子脸','水蛇腰')
   console.log(result)
   `````

### 函数参数&&返回类型定义

#### 简单类型定义

demo5.ts

````typescript
function getTotal(one: number, two: number) {
  return one + two;
}
const total = getTotal(1, 2);
````

代码写错

```typescript
function getTotal(one: number, two: number) {
  return one + two + "";
}
const total = getTotal(1, 2);
```

`total`的值就不是`number`类型  不会报错

函数的返回值加上类型注解

````typescript
function getTotal(one: number, two: number): number {
  return one + two;
}
const total = getTotal(1, 2);
````

尽量让自己的代码更加严谨。

函数无返回值时定义方法

定义一个`sayHello`的函数

````typescript
function sayHello(): void {
  console.log("hello world");
}
````

给他一个类型注解`void`，代表没有任何返回值。

#### never 返回值类型

如果一个函数是永远也执行不完的，就可以定义返回值为`never`

抛出异常

```js
function errorFuntion(): never {
  throw new Error();
  console.log("Hello World");
}
```

 死循环

`````typescript
function forNever(): never {
  while (true) {}
  console.log("Hello kiven");
}
`````

#### 函数参数为对象(解构)

当一个函数的参数是对象  定义参数对象的属性类型`javaScript`

```js
function add({ one, two }) {
  return one + two;
}
const total = add({ one: 1, two: 2 });
```

参数加`类型注解`

```typescript
function add({ one, two }: { one: number, two: number }): number {
  return one + two;
}
const three = add({ one: 1, two: 2 });
```

参数是对象，并且里边只有一个属性

````typescript
function getNumber({ one }: { one: number }): number {
  return one;
}
const one = getNumber({ one: 1 });
````



### 三种函数的定义方式

#### 函数声明法

使用function关键字和函数名去定义一个函数。

`````typescript
function add(n1:number,n2:number):number{
    return n1+n2
}
`````

#### 函数表达式

函数表达式法是将一个函数赋值给一个变量

这个变量名就是函数名。

`````typescript
var add = function(n1:number,n2:number):number{
    return n1+n2
}
console.log(add(1,4))
`````

#### 箭头函数

箭头函数定义的函数一般都用于回调函数中。

````typescript
var add = (n1:number,n2:number):number=>{
    return n1+n2
}
console.log(add(1,4))
````

### 函数中变量作用域

每个变量都有一个起作用的范围，这个范围就是变量的作用域。在TypeScript语言中变量作用域划分是以函数为标准的。

``````typescript
function zhengXing():void{
    var yangzi = 'King'
    console.log(yangzi)
}
zhengXing()
console.log(yangzi)
``````

函数里用`var`定义一个`yangzi`的变量,我们再函数的外部读取这个变量，你会发现是读取不到的。

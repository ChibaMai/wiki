## 数组

TypeScript中的数据分为值类型和引用类型。

### 初识引用类型

````typescript
let kiven = {
    name:'凯文',
    website:'kiven.com',
    age:18,
    saySometing:function(){
        console.log('为了前端技术')
    }
}
console.log(kiven.name)
kiven.saySometing()
````

引用类型，例如：Array（数组）、String（字符串）、Date（日期对象）、RegExp（正则表达式)

### 初始化数组的两种方法

**声明数组的方法**

```````typescript
let arr1:number[ ]     //声明一个数值类型的数组
let arr2:Array<string>  //声明一个字符串类型的数组
```````

**给数组赋值**

数组是存储大量数据的集合，声明数组之后，需要给数组存储数据。这时候有两种方法：

- 字面量赋值法：直接使用“[ ]”对数组进行赋值。
- 构造函数赋值法：

**字面量赋值法**

````typescript
//定义一个空数组，数组容量为0
let arr1:number[] = [] 
//定义一个数组时，直接给数组赋值
let arr2:number[] = [1,2,3,4,5]
//定义数组的同时给数组赋值
let arr3:Array<string> = ['kiven','凯文','金三胖']
let arr4:Array<boolean> = [ true,false,false]
````

【注】TypeScript中指定数据类型的数组只能存储同一类型的数组元素。

**构造函数赋值法**

````typescript
let arr1:number[] = new Array()
let ara2:number[] = new Array(1,2,3,4,5)
let arr3:Array<string> = new Array('kiven','凯文','金三胖')
let arr4:Array<boolean> = new Array(true,false,false)
````

### 多种类型如何定义

``````typescript
const arr: (number | string)[] = [1, "string", 2];
``````

### 对象类型的定义

````typescript
const xiaoJieJies: { name: string, age: Number }[] = [
  { name: "King", age: 18 },
  { name: "Tom", age: 28 },
];
````

**定义一个`Lady`的别名。**

``````typescript
type Lady = { name: string, age: Number };
``````

改变形式

````typescript
type Lady = { name: string, age: Number };

const xiaoJieJies: Lady[] = [
  { name: "King", age: 18 },
  { name: "Tom", age: 28 },
];
````

定义类限制数组

````typescript
class Madam {
  name: string;
  age: number;
}

const xiaoJieJies: Madam[] = [
  { name: "King", age: 18 },
  { name: "Tom", age: 28 },
];
````

## 元组

元组和数组类似，但是类型注解时会不一样。

````typescript
const xiaojiejie: [string, string, number] = ["dajiao", "teacher", 28];
````

数组中的每个元素类型的位置给固定住了，这就叫做元组。

### 元组的使用

数据源`CSV`

严谨的编程就需要用到元组

`````typescript
"dajiao", "teacher", 28;
"liuying", "teacher", 18;
"cuihua", "teacher", 25;
`````

``````typescript
const xiaojiejies: [string, string, number][] = [
  ["dajiao", "teacher", 28],
  ["liuying", "teacher", 18],
  ["cuihua", "teacher", 25],
];
``````




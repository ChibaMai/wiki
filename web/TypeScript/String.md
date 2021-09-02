
## 字符串

字符串的两种类型

- 基本类型字符串：由单引号或者双引号括起来的一串字符串。
- 引用类型字符串：用new 实例化的 String类型。

1. 定义字符串

   `````
   let kiven:string = '凯文'
   let kivena:String = new String("kiven.com")
   console.log(kiven)
   console.log(kivena)
   `````

2. 获取字符串长度

   ````typescript
   kiven.length
   ````

### 常用字符串Api

####  查找字符串

头部查找字符串直接使用indexOf

基本语法：`str.indexOf(subStr)`

字符串没有找到，则返回-1。返回的都是字符串的下标

#### 截取字符串

基本语法如下：

```typescript
str.substring(startIndex,[endIndex])
```

#### **替换字符串**

基本语法如下：

`````typescript
str.replace(subStr,newstr);
`````

## 日期对象

````typescript
let d:Date = new Date()
console.log(d)
````

`````bash
2018-09-06T06:48:12.504Z
`````

### 传递表示年月日时分秒的变量

```typescript
let d:Date = new Date(year,month,day,hours,minutes,seconds,ms);
```

- year 表示年份，4位数字。
- month表示月份，数值是0(1月)~11(12月)之间的整数。
- day 表示日期。数值是1~31之间的整数。
- hours 表示小时，数值是0-23之间的整数。
- minutes 表示分钟数，数值是0~59之间的整数。
- seconds 表示秒数，数值是0~59之间的整数。
- ms 表示毫秒数，数值是0~999之间的整数。

## 正则表达式

比如g是全局修饰符，i是忽略大小写，m是多行模式。

`````typescript
let reg1:RegExp = new RegExp("kiven")  //表示字符串规则里含有kiven
console.log(reg1)
let reg2:RegExp = new RegExp("kiven",'gi')
console.log(reg2)
`````

**字面量法**

````js
let reg3:RegExp = /kiven/
let reg4:RegExp = /kiven/gi
````

### RegExp中的常用方法

RegExp对象包含两个方法：test( )和exec( ),功能基本相似，用于测试字符串匹配。

- **test(string)** ：在字符串中查找是否存在指定的正则表达式并返回布尔值，如果存在则返回 true，不存在则返回 false。
- **exec(string)** : 用于在字符串中查找指定正则表达式，如果 exec() 方法执行成功，则返回包含该查找字符串的相关信息数组。如果执行失败，则返回 null。

````typescript
let reg1:RegExp =  /kiven/i
let website:string = 'kiven.com'
let result:boolean = reg1.test(website)
console.log(result)    //true
````

`exec`的使用方法

````typescript
let reg1:RegExp =  /kiven/i
let website:string = 'kiven.com'
console.log(reg1.exec(website))
//[ 'kiven', index: 0, input: 'kiven.com' ]
````

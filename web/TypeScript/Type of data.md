
## 数据类型

- Undefined :

  赋予任何值的时候，他就是Undefined类型

  `````js
  //声明数值类型的变量age，但不予赋值
  var age:number
  console.log(age)
  `````

- Number:数值类型;

  ````typescript
  var age:number = 18
  var stature:number = 178.5
  console.log(age)
  console.log(stature)
  ````

- string : 字符串类型;

  ````typescript
  var kiven:string = "kiven.com"
  console.log(kiven)
  ````

- Boolean: 布尔类型；

  ````typescript
  var b:boolean = true
  var c:boolean = false
  ````

- enum：枚举类型；

  变量的结果是固定的几个数据时

  ````typescript
  enum REN{ nan , nv ,yao}
  console.log(REN.yao)  //返回了2，这是索引index，跟数组很想。
  ````

  枚举赋值

  ````typescript
  enum REN{
      nan = '男',
      nv = '女',
      yao= '妖'
  }
  console.log(REN.yao)  //返回了妖 这个字
  ````

- any : 任意类型，一个牛X的类型；

  程序中不断变化着类型，又不想让程序报错

  ````typescript
  var t:any =10 
  t = "kiven"
  t = true
  console.log(t)
  ````

- void：空类型；

  

- Array : 数组类型;

- Tuple : 元祖类型；

- Null ：空类型。


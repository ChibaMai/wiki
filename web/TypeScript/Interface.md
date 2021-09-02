
### 接口

定义接口的关键字是`interface`

````typescript
interface Husband {
    sex:string
    interest:string
}
let myhusband:Husband ={ sex:'男',interest:'看书、作家务'}
console.log(myhusband)
````

#### 接口方法

没有进行接口优化代码

`````typescript
const screenResume = (name: string, age: number, bust: number) => { 
  age < 24 && bust >=90 && console.log(name+"进入面试")
  age >=24 || bust <90 && console.log(name+"你被淘汰")
}
//查看
const getResume = (name: string, age: number, bust: number) => { 
  console.log( name+'年龄是'+age)
  console.log( name+'胸围是'+bust)
}
screenResume('珈百璃', 18, 59)
screenResume('波多野结衣', 18, 94)
`````

接口优化

```typescript
//接口类型注解
interface Girl {
  name: string;
  age: number;
  bust: number;
}
```

`````typescript
const screenResume = (girl: Girl) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
  girl.age > 24 || (girl.bust < 90 && console.log(girl.name + "你被淘汰"));
};

const getResume = (girl: Girl) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "胸围是：" + girl.bust);
};
const girl = {
  name: "桥本环奈",
  age: 18,
  bust: 94,
};

screenResume(girl);
getResume(girl);
`````

#### 可选参数的接口

````typescript
interface Husband {
    sex:string
    interest:string
    maiBaoBao?:Boolean //可选参数接口
}
let myhusband:Husband ={ sex:'男',interest:'看书、作家务',maiBaoBao:true}
console.log(myhusband)
````

#### 规范函数类型接口

`````typescript
interface  SearchMan{
    (source:string,subString:string):boolean
}
let mySearch:SearchMan
mySearch = function(source:string,subString:string):boolean{
    let flag =source.search(subString)
    return (flag != -1)
} 

console.log(mySearch('高、富、帅、德','胖')) //false
`````

#### 接口和类型别名的区别

类型别名可以直接给类型，比如`string`，而接口必须代表对象。

`类型别名`

````
type Girl1 = stirng;
````

`girl`

````typescript
const girl = {
  name: "桥本环奈",
  age: 18,
  bust: 94,
};
````

#### 允许加入任意值

````typescript
interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
  [propname: string]: any;
}
````

属性的名字是字符串类型，属性的值可以是任何类型

#### 接口的方法

````typescript
interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
  [propname: string]: any; //属性名称string  类型任何
  say(): string;
}
````

`````typescript
const girl = {
  name: "波多野结衣",
  age: 18,
  bust: 94,
  waistline: 21,
  sex: "女",
  say() {
    return "欢迎光临 ，红浪漫洗浴！！";
  },
};
`````

#### 接口限制类

`````typescript
// 接口限制类
class Xiaojiejie implements Girl { 
  name: "小仓唯"
  age: 18
  bust: 94
  waistline: 21
  sex: "女"
  say() {
    return "欢迎光临 ，红浪漫洗浴！！";
  }
}
`````

`implements` 关键字

#### 接口间的继承

`Teacher`接口，继承于`Person`接口。

```typescript
interface Teacher extends Girl {
  teach(): string;
}
```

`````typescript
const getResume = (girl: Teacher) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "胸围是：" + girl.bust);
  girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
  girl.sex && console.log(girl.name + "性别是：" + girl.sex);
};
`````

传值必须有`Teach`方法

````typescript
const girl = {
  name: "桥本环奈",
  age: 18,
  bust: 94,
  waistline: 21,
  sex: "女",
  say() {
    return "欢迎光临 ，红浪漫洗浴！！";
  },
  teach() {
    return "我是一个老师";
  },
};
````



### 命名空间

命名空间，又称内部模块，被用于组织有些具有内在联系的特性和对象。

````typescript
namespace shuaiGe{
    export class Dehua{
        public name:string = '刘德华'
        talk(){
            console.log('我是帅哥刘德华')
        }
    }
}

namespace bajie{
    export class Dehua{
        public name:string = '马德华'
        talk(){
            console.log('我是二师兄马德华')
        }
    }
}

let dehua1:shuaiGe.Dehua   = new shuaiGe.Dehua()
let dehua2:shuaiGe.Dehua   = new bajie.Dehua()
dehua1.talk()
````


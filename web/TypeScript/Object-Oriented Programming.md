
## 面向对象编程

### 类定义

`````typescript
class XiaoJieJie{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name
        this.age = age 
    }
    say(){
        console.log('小哥哥好')
    }
}
let jiejie:XiaoJieJie = new XiaoJieJie('范冰冰',18)
console.log(jiejie)
jiejie.say()
`````

`constructor`为构造函数

作用是给类中封装的属性进行赋值。

#### 类继承

`````typescript
class lady{
  content = 'Hi ,帅哥'
  sayHello() {
    return this.content
   }
}
 
class Xiaomeimei extends lady { 
  sayHello() { 
    return super.sayHello()+'. 你好'//调用父类
  }
  sayLove() { 
    return + "I Love you"
  }
}

const goodess = new Xiaomeimei()
console.log(goodess.sayHello());
console.log(goodess.sayLove());
`````

#### 类的访问类型

`````typescript
// 类的访问类型
class Person { 
  name: string;
}
const person = new Person()
person.name = 'kiven'
console.log(person.name)
`````

#### 修饰符

- public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
- protected:受保护的修饰符，只允许再类的内部被调用，外部不允许调用
- private : 私有修饰符，允许在类内及继承的子类中使用

`````typescript
class XiaoJieJie2{
    public sex:string
    protected name:string
    private age:number
    public constructor(sex:string,name:string,age:number){
        this.sex=sex
        this.name=name
        this.age=age
    }
    public sayHello(){
        console.log('小哥哥好')
    }

    protected sayLove(){
        console.log('我爱你')
    }
}

var jiejie2:XiaoJieJie2 = new XiaoJieJie2('女','热巴',22)

console.log(jiejie2.sex)
console.log(jiejie2.name)   //报错
console.log(jiejie2.age)    //报错
jiejie2.sayHello()
jiejie2.sayLove()    //报错
`````

##### 只读属性修饰符

使用readonly修饰符将属性设置为只读，只读属性必须在生命时或者构造函数里被初始化

`````typescript
class Man{
    public readonly sex:string = '男'
}
var man:Man = new Man()
man.sex='女'
`````

#### 类的构造函数

类被初始化·是 自动执行的一个方法

`````typescript
//类的构造函数

class Person{
  constructor(public name:string){}
}

class Teacher extends Person { 
  // 子类 如果使用constructor  必须实现 父类方法
  constructor(public age: number) { 
    super('kiven')
  }
}

const teacher= new Teacher(18)
console.log(teacher.name)
console.log(teacher.age)
`````

子类只要写 构造函数 必须	`super`  才可不报错

#### 类的Getter Setter

```js
class Nvhai {
  
  constructor(private _age:number){}
  get age(){
      return this._age-10
  }
  set age(age:number){
    this._age=age
  }
}

const nvhai = new Nvhai(28)
nvhai.age=25
console.log(nvhai.age)
```

`setter`也是可以保护私有变量

````typescript
 set age(age:number){
    this._age=age+3
  }
````

静态类

````typescript
class Gir { 
  static sayLove() { 
    return 'I love you!'
  }
}
console.log(Gir.sayLove())
````

#### 抽象类

````typescript
class Waiter {}

class BaseTeacher {}

class seniorTeacher {}
````

定义抽象方法

`````typescript
abstract class Girl{
    abstract skill()  //因为没有具体的方法，所以我们这里不写括号
}

class Waiter extends Girl{
    skill(){
        console.log('先生，请喝水！')
    }
}

class BaseTeacher extends Girl{
    skill(){
        console.log('先生，来个泰式按摩吧！')
    }
}

class seniorTeacher extends Girl{
    skill(){
        console.log('先生，来个SPA全身按摩吧！')
    }
}
`````

### 继承和重写

继承：允许我们创建一个类（子类），从已有的类（父类）上继承所有的属性和方法，子类可以新建父类中没有的属性和方法。

`````typescript
class kiven{
    public name:string
    public age : number
    public skill: string
    constructor(name:string,age:number,skill:string){
        this.name = name
        this.age = age
        this.skill = skill
    }
    public interest(){
        console.log('找小姐姐')
    }
}

let kivenObj:kiven = new kiven('凯文',18,'web')
kivenObj.interest()
`````

`extends`关键字就是继承的重点

`````typescript
class JsShuai extends kiven{
    public xingxiang:string = '帅气'
    public zhuangQian(){
        console.log('一天赚了一个亿')
    }
}

let shuai = new JsShuai("技术帅",5,'演讲')
shuai.interest()
shuai.zhuangQian()
`````

### 类方法的重写

````typescript
class JsShuai extends kiven{
    public xingxiang:string = '帅气'
    public interest(){
        super.interest()
        console.log('建立电商平台')
    }
    public zhuangQian(){
        console.log('一天赚了一个亿')
    }
}
````

super关键字调用了父类的方法，实现了技能的增加。

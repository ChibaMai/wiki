
## Enum 枚举类型

如果在程序中能灵活的使用枚举(`enum`),会让程序有更好的可读性

低级

```typescript
function getServe(status: number) {
  if (status === 0) {
    return "massage";
  } else if (status === 1) {
    return "SPA";
  } else if (status === 2) {
    return "dabaojian";
  }
}
const result = getServe(0);
console.log(`我要去${result}`);
```

中级

````typescript
const Status = {
  MASSAGE: 0,
  SPA: 1,
  DABAOJIAN: 2,
};

function getServe(status: any) {
  if (status === Status.MASSAGE) {
    return "massage";
  } else if (status === Status.SPA) {
    return "spa";
  } else if (status === Status.DABAOJIAN) {
    return "dabaojian";
  }
}

const result = getServe(Status.SPA);

console.log(`我要去${result}`);
````

高级

``````typescript
enum Status {
  MASSAGE,
  SPA,
  DABAOJIAN,
}

function getServe(status: any) {
  if (status === Status.MASSAGE) {
    return "massage";
  } else if (status === Status.SPA) {
    return "spa";
  } else if (status === Status.DABAOJIAN) {
    return "dabaojian";
  }
}

const result = getServe(Status.SPA);

console.log(`我要去${result}`);
``````

### 枚举类型的对应值

```typescript
const result = getServe(1);
```

枚举类型是有对应的数字值的，默认是从 0 开始的

`````typescript
console.log(Status.MASSAGE);
console.log(Status.SPA);
console.log(Status.DABAOJIAN);
`````

结果就是`0,1,2`。那这时候不想默认从 0 开始，而是想从 1 开始

`````typescript
enum Status {
  MASSAGE = 1,
  SPA,
  DABAOJIAN,
}
`````

枚举通过下标反查

````typescript
console.log(Status.MASSAGE, Status[1]);
````

## 函数泛型

联合类型 Demo

简单的`join`方法 ，字符串的基本拼接

````typescript
function join(first: string | number, second: string | number) {
  return `${first}${second}`;
}
join("kiven", ".com");
````

**实现需求**

就是`first`参数如果传的是字符串类型，要求`second`也传字符串类型

### 初始泛型概念-generic

泛型：[generic - 通用、泛指的意思],那最简单的理解，泛型就是泛指的类型。

泛型的定义使用`<>`

```typescript
function join<kiven>(first: kiven, second: kiven) {
  return `${first}${second}`;
}
join < string > ("kiven", ".com");
```

如果要是`number`类型

就直接在调用方法的时候进行更改

`````typescript
join < number > (1, 2);
`````

### 泛型中数组的使用

如果传递过来的值要求是数字，如何用泛型进行定义

第一种是直接使用`[]`，

`````typescript
function myFun<ANY>(params: ANY[]) {
  return params;
}
myFun < string > ["123", "456"];
`````

第二种是使用`Array<泛型>`

```typescript
function myFun<ANY>(params: Array<ANY>) {
  return params;
}
myFun < string > ["123", "456"];
```

经常使用`<T>`来作泛型的表示

### 多个泛型的定义

定义多个泛型，比如第一个泛型用`T`,第二个用`P`代表。

```typescript
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join < number, string > (1, "2");
```

泛型在造轮子的时候经常使用，因为造轮子很多东西都需要灵活性。

如果函数定义了多个泛型，使用时要对应的定义出具体的类型。

### 泛型的类型推断

```typescript
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join(1, "2");
```

## 类中泛型

### 基本类

类`SelectGirl` 类的构造函数中(constructor)

```typescript
class SelectGirl {
  constructor(private girls: string[]) {}
  getGirl(index: number): string {
    return this.girls[index];
  }
}

const selectGirl = new SelectGirl(["桥本环奈", "小仓唯", "珈百璃"]);
console.log(selectGirl.getGirl(1));
```

编写复杂代码的时候，会经常使用泛型。

```typescript
class SelectGirl {
  constructor(private girls: string[] | number[]) {}
  getGirl(index: number): string | number {
    return this.girls[index];
  }
}
```

### 初始类的泛型

用泛型重构代码

用`<>`编写

````typescript
//使用泛型。
class SelectGirl<T> {
  constructor(private girls:T[]) {}
  getGirl(index: number):T {
    return this.girls[index];
  }
}
// 通过推断方式 判断类型  
// 需要在实例化对象的时候，对泛型的值进行确定
const selectGirl = new SelectGirl<string>(["桥本环奈", "小仓唯", "珈百璃"]);
console.log(selectGirl.getGirl(1));
````

### 泛型中的继承

要求返回是一个对象中的`name`

`````typescript
return this.girls[index].name;
`````

写一个`Girl`的接口

每个接口里都要有 `name` 属性

````typescript
interface Girl {
  name: string;
}
````

有了接口后用`extends`关键字实现泛型继承

`````typescript
class SelectGirl<T extends Girl> {
 ...
}
`````

这句代码的意思是泛型里必须有一个`name`属性，因为它继承了`Girl`接口。

因为我们`getGirl`方法的返回类型还不对，这时候应该是一个`string`类型才对

`````typescript
interface Girl {
  name: string;
}

//使用泛型。   继承必须返回 name
class SelectGirl<T extends Girl> {
  constructor(private girls:T[]) {}
  getGirl(index: number):string {
    return this.girls[index].name;
  }
}
// 通过推断方式
const selectGirl = new SelectGirl([
  { name: "桥本环奈" },
  { name: "小仓唯" },
  { name: "珈百璃" },
]);

console.log(selectGirl.getGirl(1));
`````

`SelectGirl`类中使用了泛型

有一个约束条件，这个类型，必须要有一个`name`属性

### 泛型约束

泛型可以是任意类型，可以是对象、字符串、布尔、数字都是可以的

```typescript
interface Girl {
  name: string;
}

//使用泛型。   继承必须返回 name
class SelectGirl<T extends number | string> {
  constructor(private girls:T[]) {}
  getGirl(index: number):T {
    return this.girls[index];
  }
}
// 通过推断方式
const selectGirl = new SelectGirl<string>(["桥本环奈", "小仓唯", "珈百璃"]);
console.log(selectGirl.getGirl(1));
```

泛型必须是`string`或者`number`类型

关键字`extends`来进行约束

```````typescript
class SelectGirl<T extends number | string> {
  //.....
}
```````

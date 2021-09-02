
## 联合类型和类型保护

所谓联合类型，可以认为一个变量可能有两种或两种以上的类型。关键符号是`|`

`````typescript
interface Waiter {
  anjiao: boolean;
  say: () => {};
}
interface Teacher {
  anjiao: boolean;
  skill: () => {};
}
function judgeWho(animal: Waiter | Teacher) {}
`````

```typescript
function judgeWho(animal: Waiter | Teacher) {
  animal.say();
}
```

如果直接写一个这样的方法，会报错因为`judgeWho`不能准确的判断联合类型具体的实例是什么。

概念叫做`类型保护`

### 类型保护

#### 类型断言

类型断言就是通过断言的方式确定传递过来的准确值

```````typescript
interface Waiter {
  anjiao: boolean;
  say: () => {};
}

interface Teacher {
  anjiao: boolean;
  skill: () => {};
}

function judgeWho(animal: Waiter | Teacher) {
  //如果存在 
  if (animal.anjiao) {
    (animal as Teacher).skill();
  }else{
    (animal as Waiter).say();
  }
}
```````

#### in 语法

我们还经常使用`in`语法来作类型保护，比如用`if`来判断`animal`里有没有`skill()`方法。

`````typescript
function judgeWhoTwo(animal: Waiter | Teacher) {
  if ("skill" in animal) {
    animal.skill();
  } else {
    animal.say();
  }
}
`````

##### typeof 语法

`add` 方法

`````typescript
function add(first: string | number, second: string | number) {
  return first + second;
}
`````

不做任何的类型保护，只是相加 产生报错

正确写法

````typescript
function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}
````

#### instanceof 语法

类型保护的是一个对象

`````typescript
class NumberObj {
  count: number;
}
`````

未添加类型保护【报错】

```typescript
function addObj(first: object | NumberObj, second: object | NumberObj) {
  return first.count + second.count;
}
```

正确写法

`````typescript
function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}
`````

`instanceof`语法进行判断，instanceof 只能用在类上。

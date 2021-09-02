

## 类型注解&&类型推断

### (type annotation)类型注解

````typescript
let count: number;
count = 123;
````

`count`变量就是一个数字类型，这就叫做`类型注解

### (type inferrence) 类型推断

```typescript
let countInference = 123;
```

TypeScript 自动把变量注释为了`number`（数字）类型

### 工作(潜规则)

- 如果 `TS` 能够自动分析变量类型， 我们就什么也不需要做了
- 如果 `TS` 无法分析变量类型的话， 我们就需要使用类型注解

不用写类型注解的例子：

````typescript
const one = 1;
const two = 2;
const three = one + two;
````

再来看一个用写类型注解的例子：

````typescript
function getTotal(one, two) {
  return one + two;
}
const total = getTotal(1, 2);
````

因为这里的`one`和`two`会显示为`any`类型。

必须加一个`类型注解`

````js
function getTotal(one: number, two: number) {
  return one + two;
}
const total = getTotal(1, 2);
````

TypeScript 也可以推断出对象中属性的类型

````typescript
const XiaoJieJie = {
  name: "刘英",
  age: 18,
};
````

### 数组类型注解

`````typescript
// 数组类型注解
const numberArr: number[] = [1, 2, 3]
const arr: (number | string)[] = [1, 'string', 2]
`````

````typescript
const xioameimei:{name:string,age:number}[] = [
  { name: '桥本环奈', age: 18 },
  { name: '小仓唯', age: 18 }
]
````

*`type alias` 类型别名*

`````typescript
type Lady={name:string,age:number}
const xiaojiejie:Lady[] = [
  { name: '桥本环奈', age: 18 },
  { name: '小仓唯', age: 18 }
]
`````

*类的形式 进行注解*

`````typescript
class Madam { 
  name: string;
  age: number;
}

const xiaomeimei:Madam[] = [
  { name: '桥本环奈', age: 18 },
  { name: '小仓唯', age: 18 }
]
`````

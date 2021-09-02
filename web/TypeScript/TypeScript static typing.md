


## TypeScript 静态类型

TypeScript 的一个最主要特点就是可以定义静态类型(Static Typing)

### 如何定义

```js
const count: number = 1;
```

### 自定义静态类型

```typescript
interface Xiaojiejie{
  uname: String;
  age: Number;
}

const nai: Xiaojiejie = {
  uname: "桥本环奈",
  age: 18,
} 

console.log(nai.age);
```

如果使用了静态类型，不仅意味着变量的类型不可以改变，还意味着类型的属性和方法也跟着确定了

大大提高了程序的健壮性

### 基础静态类型&&对象类型

#### 基础静态类型

```typescript
const count : number = 918;
const myName ：string = 'kiven'
```

类似这样常用的基础类型还有: `null`,`undefinde`,`symbol`,`boolean`,`void`

#### 对象类型

````typescript
const xiaoJieJie: {
  name: string,
  age: number,
} = {
  name: "King",
  age: 18,
};
console.log(xiaoJieJie.name);
````

经典的对象类型

**对象类型也可以是数组**

`````typescript
const xiaojiejie: String[] = ["波多野结衣", "花泽香菜"]
`````

数组里的内容必须是字符串

**用类的形式，来定义变量**

```typescript
class Person {}
const dajiao: Person = new Person();
```

**定义一个函数类型，并确定返回值**

```typescript
//定义函数类型 并确定返回值
const huaze :() => string = () => { return "花泽香菜"}
```

**对象类型可以有几种形式：**

- 对象类型
- 数组类型
- 类类型
- 函数类型

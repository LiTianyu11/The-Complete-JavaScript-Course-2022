# Sets

适合用来储存独一无二的数据，其重要程度还是要低于 Array

## Set 常用的一些方法

- Set.prototype.has()
- Set.prototype.add()
- Set.prototype.delete()

## Sets 中没有索引

- 没有 Set[i]这种操作
- Set 可以使用 for...Of 来遍历

## ...(Spread Syntax)操作 Set

```javascript
const s = new Set(["a", "b", "c"]);
const s1 = [...new Set(["a", "b", "c"])];
console.log(s); // Set(3) {size: 3, a, b, c}
console.log(s1); // ['a', 'b', 'c']
```

# Maps

- Maps 比 Sets 有用很多
- 在 Objects 中 Keys 基本上都是 Strings，但 Maps 中 Keys 可以是任何类型（可以是 Objects，Arrays，或其他 Maps）

## Maps 常用方法

- 创建 Maps

```javascript
const map = new Map(["key1", "value1"], ["key2", "value2"], ["key3", "value3"]);
```

- Map.prototype.set()

```javascript
rest.set("name", "Tianyu");
rest.set("name", "ChangeName");
//Map(1) {size: 1, name => ChangeName}

rest
  .set("catogories", ["1", "2", "3"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are close");
```

-Map.prototype.get()

```javascript
rest.get(true); // 'We are open'

//我们可以玩点好玩的
const time = 21;
rest.get( time > rest.get("open") && time < rest.get("close")> ) // true => "We are oepn"

//get容易出错的点
🔴wrong
rest.set([1,2], "Test");
rest.get([1,2]) // => undefined 因为上面的[1,2]和下面[1,2]指向的不是同一个数组

🟢right
cosnt arr = [1,2]
rest.set(arr , "Test");
rest.get(arr) // "Test"

```

## ⭐ Objects => Maps / Maps => Array

- Objects -> Array -> Maps

```javascript
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(openingHours); //Object
console.log(Object.entries(openingHours)); // Object => Arrays
const hours = new Map(Object.entries(openingHours)); // Array => Map
console.log(hours);
```

- Maps => Array (use spread)

```javascript
[...map] // = [...map.entries()]
[...map.keys()] //生成keys数组
[...map.values()] //生成values数组
```

## ⭐ 利用 Map 写一个问答小程序

```javascript
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt("Your answer"));
console.log(question.get(question.get("correct") === answer));
```

## Souces of Data

- From the program itself: Date wirrten directly in source code (e.g status message)
- From the UI: Date input from the user or data written in DOM (e.g tasks in todo apps )
- From external sources: Data fetched for example form web APIs (e.g recipe objects)
  通过web APIs得到的数据通常采用JSON格式


## 基本内置数据类型（Arrays Objects Sets Maps)该用哪个？
[Alt text](09-Date-Structures-Operators\Pics\image 6.jpg)
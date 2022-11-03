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
- 创建Maps
```javascript
const map = new Map(
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
)
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
const s = new Set(["a", "b", "c"]);
const s1 = [...new Set(["a", "b", "c"])];
console.log(typeof s);
console.log(typeof s1);

const rest = new Map();
rest.set("name", "Tianyu");
rest.set("name", "ChangeName");
console.log(rest);

rest
    .set("catogories", ["1", "2", "3"])
    .set('open',11)
    .set('close',23)
    .set(true, 'We are open')
    .set(false, 'We are close')

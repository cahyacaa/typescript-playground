"use strict";
let res = [];
let res1 = [];
for (let index = 0; index < 100; index++) {
    res.push({
        name: `lala ${index}`,
        age: index,
    });
    res1.push({
        name: `lala ${index}`,
        age: index,
        year: (new Date).getFullYear() + index
    });
}
console.log(res);
console.log(res1);

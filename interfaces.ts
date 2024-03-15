interface Obj {
    name: string
    age: number
}

interface Obj2 extends Obj {
    year: number
}

let res: Array<Obj> = []
let res1: Array<Obj2> = []

for (let index = 0; index < 100; index++) {
    res.push({
        name: `lala ${index}`,
        age: index,
    })

    res1.push({
        name: `lala ${index}`,
        age: index,
        year: (new Date).getFullYear() + index
    })
}
console.log(res)
console.log(res1)

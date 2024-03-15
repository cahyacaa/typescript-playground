interface Obj {
    name: string
    age: number
}


let res: Array<Obj> = []
for (let index = 0; index < 100; index++) {
    res.push({
        name: `lala ${index}`,
        age: index
    })
}
console.log(res)
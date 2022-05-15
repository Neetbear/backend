function test() {
    const a = 1;
    const b = 1;
    return { a, b }
}

const {a, b} = test()

console.log("a : " + a , ", b : " + b)

console.log(typeof 4)
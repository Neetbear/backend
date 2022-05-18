// 1번

function a(callback){
    setTimeout(time2,0)
    console.log('hello world')
    setTimeout(time,0) 
    callback() 
}

console.log(3) 

function time2(){
    console.log('hi')
}

function time(){
    console.log('5')
}

a(time)

/*
    3
    hello world
    5
    hi
    5
*/

// ==================================================================================
// 2번

function ingoo() {
    console.log('3')
    return 4
}

function goak() {
    console.log('1')
    return ingoo() // return의 method 호출
}

function hello(callback) {
    goak()
    console.log('5')
    callback('6')
}

const result = ingoo()
hello(goak)
console.log(typeof result)

// callstack
/*
    3
    1
    3
    5
    1
    3
    number
*/
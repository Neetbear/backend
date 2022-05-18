// settimeout 인자
// 1. 함수(콜백)
// 2. 시간

console.log('hello!!!!')
function callback() {
    console.log("hello")
}
setTimeout(callback, 1000)
console.log('ingoo')

/*
    background 무시하면 
    hello!!!
    hello
    ingoo 
*/
/*
    실제
    hello!!!
    ingoo
    hello
*/

// 비동기 함수
/* 
    setTimeout(callback, 1000) -> back ground 
    1000 후 호출되는 callback -> task queue 
    event loop에 의해서 call stack이 비어지면 call stack에 보내짐

    callback이 비동기인게 아니라 setTimeout에 의해서 task queue에 보내진거
*/
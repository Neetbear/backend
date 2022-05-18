// setTimeout time 용
// const time = () => { parseInt(Math.random() * 10 + 1) * 1000 }

// const 아반떼 = (cb) => {
//     setTimeout(() => {
//         console.log('아반떼 end')
//         cb()
//     }, time())
//     console.log('아반떼 go')
// }

// const 소나타 = (cb) => {
//     setTimeout(() => {
//         console.log('소나타 end')
//         cb()
//     }, time())
//     console.log('소나타 go')
// }

// const 제네시스 = (cb) => {
//     setTimeout(() => {
//         console.log('제네시스 end')
//         cb()
//     }, time())
//     console.log('제네시스 go')
// }

/*
    경기시작
    아반떼 go
    아반떼 end
    소나타 go
    소나타 end
    제네시스 go
    제네시스 end
    경기종료
*/
// const 경기 = () => {
//     console.log('경기시작')
//     아반떼()
//     소나타()
//     제네시스()
//     setTimeout(() => {
//         console.log('경기종료')
//     })
// }
// 경기()

// 코드 블록이 길어진다 javascript tab 4 => tab 2
// console.log('경기시작')
// 아반떼(() => {
//     소나타(() => {
//         제네시스(() => {
//             console.log('경기종료')
//         })
//     })
// })

// let a =0
// db.query(`SELECT * FROM board`, (error, result) => {
//     a = 10 
// })
// a = a + 1
// console.log(a) // 1 -> 11을 찍고 싶었지만 a = 10은 backgroud 안에 돌고 있어서 못갔다씀

// callback 지옥
// javascript -> 비동기 코드 
// promise 
// 쉽게 써보자 async / await 
// async function a() { // promise객체 return
//     return 'a'
// }

// console.log(a()) // Promise{'a'}

// promise -> callback 지옥을 벗어나고 싶다 -> background에 들어갈 함수를 하나 더 만듬
// 기본적으로 객체 (task queue에 들어갈 함수가 필요하므로 콜백 함수를 가진)
// const b = new Promise((resolve, reject) => {
//     // <pending> 대기 : 이행하거나 거부되지 않은 초기 상태
//     // 어떤 특정한 값이 호출이 되야 끝나는 아이
//     for(let i = 0; i < 10; i++) {
//         // if(i == 5) resolve('ingoo')
//         console.log(i)
//         // resolve와 reject를 같이 쓰고 싶으면? -> 조건이 필요
//     }
//     try {
//         if(i==1) {
//             console.log('hello')
//         }
//         if(i==2) {
//             console.log('hi')
//         }
//         resolve('호호호호')
//     } catch (e) {
//         reject('하하하하')
//     }
// })
// b.then((b) => {console.log(b)}).catch((e)=> {console.log(e)})

// promise 객체는 특별해서 값을 뽑아주고 싶으면 
// .then() .catch()

// setTimeout이 드가면? 
// const c = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('aaaa')
//     }, 1000)
//     reject('바로 에러날 듯')
// })
// c.then((b) => {console.log(b)}).catch((e)=> {console.log(e)})

// promise로 자동차 경주 고치면? 
const time = () => { return parseInt((Math.random() * 10) + 1) * 1000 }

const 아반떼 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('아반떼 end')
        }, time())
        console.log('아반떼 go')
    })
}

const 소나타 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('소나타 end')
        }, time())
        console.log('소나타 go')
    })
}

const 제네시스 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('제네시스 end')
        }, time())
        console.log('제네시스 go')
    })
}

// 아반떼(() => {}).then(data => {
//     console.log(data)
//     return 'a' // promise 안에 promise를 넣는다고 해서 promise chaining
//                // then 메서드 안에서 쓰는 return 값은 promise로 반환 하나면 resolve
// }).then(data => console.log(data))
// console.log("경기 시작")
// 아반떼()
// .then(data => {
//     console.log(data)
//     return 소나타()
// }).then(data => {
//     console.log(data)
//     return 제네시스()
// }).then(data => {
//     console.log(data)
//     console.log("경기 종료")
// })

async function main() { 
    // async가 달린 애들은 promise를 다루기 위해서 -> return 값이 promise
    console.log("경기 시작")
    const result = await 아반떼() 
        // await는 resolve가 떨어질때까지 기다리기 -> 다른 코드 실행 안함
    console.log(result)
    const result2 = await 소나타() 
    console.log(result2)
    const result3 = await 제네시스() 
    console.log(result3)
    console.log("경기 종료")
    return 'a'
}

main().then(data => console.log(data))
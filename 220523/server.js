const express = require('express')
const app = express()
// const app = require('express')() 이것도 가능
const nunjucks = require('nunjucks')
const router = require('./routes')

app.use(express.json())

app.set('view engine', 'html')
nunjucks.configure('views', {
    express:app
})

app.use(router)

// const result = app.listen(3000, () => {
//     console.log('서버시작')
// })// listen return으로 서버를 시작한 결과물들이 객체로 담김

// 콜스택에 드가는건 app.listen -> socket.js 순서이고 
// socket.js 실행 후 app.listen 실행 => 래핑이라고 부름
require('./socket.js')(app.listen(3000, () => {
    console.log('서버시작')
}))
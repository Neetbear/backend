const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

// passport 문법 기본 꼴
const auth2 = (str, req, res, next) => {
    console.log(str)
    // console.log(req.headers)
    // authorization: 'Basic d2ViNzcyOjEyMzQ=' -> 요청받은 사람만 볼 수 있음
    // <type (= Basic)> <credentials (= d2ViNzcyOjEyMzQ=)>

    const data = req.headers.authorization.split('Basic')[1].trim(); 
    // data : d2ViNzcyOjEyMzQ=
    console.log(Buffer.from(data, 'base64').toString('utf8').split(":"))
    // [ 'web772', '1234' ]

    // => 요즘 트랜드는 basic 아니고 token(jwt)
    // Bearer [JWT or OAuth] 
    // 인증서버를 따로 만드는 경우가 많다

    next()
}

// next
app.use((req, res, next) => {
    // console.log('hello world')
    // next()
    auth2('hello world', req, res, next)
})

// 미들웨어 분리
const auth = (req, res) => {
    res.send('hello world')
}
app.get('/', auth)

app.listen(3005, () => {
    console.log('서버시작')
})

/*
    URL auth -> 생략가능해서 못본거
                다른 host에서 내 host에 접속할때 인증?용
    host 
    protocol + (auth) + hostname + port
    http://localhost:3005
    
    http://web772:1234@localhost:3005
        -> 이렇게 주면
        http request message
        Authorization < header 내용추가
*/
/*
    회원만 가능한 게시판을 구현하고 싶다

                                       OAuth 2.0 = authorization + JWT + CORS
    client  front-server  back-server  auth-server(인증서버)
    cookie --> 화면
           <-- 화면
    data request --------------------> cookie 확인
                 <--------

    auth-server -> 단점 귀찮
                   장점 관리 용이 
*/
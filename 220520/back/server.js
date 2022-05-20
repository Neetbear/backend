const express = require('express')
const app = express()
//npm install jsonwebtoken
const jwt = require('jsonwebtoken')

app.use(express.json())

// app.get('/', (req,res) => {
//     // payload 구조 qwerwredfsfsd.adsfeqrqw.sfasfdsfd 에서 가운데 값
//     // 복호화시 객체
//     const payload = {
//         userid:'web7722'
//     }
//     // secret salt sha256할때 넣어주는 아이 
//     const secret = 'ingoo'
//     const token = jwt.sign(payload, secret, {
//         algorithm:'HS256'
//     })

//     res.send(token)
// })

app.post('/auth/token', (req,res) => {
    const {userid, userpw} = req.body;
    let result = {result:false, msg:'아이디 패스워드 오류'}
    if(userid !== 'web7722' || userpw !=='1234')  return res.status(401).json(result)

    const payload = {
        userid:'web7722'
    }
    const secret = 'ingoo'
    const token = jwt.sign(payload, secret, {
        algorithm:'HS256'
    })

    result = {result:true, token, msg:null}
    res.status(200).json(result)
})

app.post('/auth/verify', (req, res) => {
    const { token } = req.body
    let response = {result:false, data:null, msg:null}
    
    // 검증 메서드
    // 1. token 2. salt -> verify token 체크 -> result payload 복호화
    try {
        const result = jwt.verify(token, 'ingoo')
        console.log(result)
        response.result = true
        response.data = result
        res.status(200).json(response)
    } catch (e) {
        response.msg = "토큰 변조하지 마라"
        res.status(401).json(response)
    }
})

// http://localhost:3500/user/me/web7722 -> web7722 params
// http://localhost:3500/user/me?userid=web7722 느낌
// url 깔끔하게 하려고 사용
app.get('/user/me/:userid', (req,res) => {
    const {userid} = req.params
    // 검증이 필요한 경우는 해야 한다 

    // db select * from user where userid=userid 
    // row 1 -> 사용자 있다
    // row 0 -> 사용자 없다
    // db 없으니 일단은 기능만 테스트

    const response = {
        userid,
        name:'ingoo'
    }
    
    res.status(200).json(response)
})

app.listen(3500, () => {
    console.log('서버시작')
})
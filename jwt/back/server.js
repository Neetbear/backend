const express = require('express')
const app = express();
const cors = require('cors')
const createToken = require('./utils/jwt')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({
    origin:true,
    credentials:true
}))

app.get('/', (req, res) =>{
    res.send('서버 테스트!')
})

app.post('/user/login', (req, res) => {
    const {userid, userpw} = req.body
    const response = {
        response:null,
        error:null
    }
    // console.log(req.body)
    // console.log(userid, userpw)
    if (userid === 'admin' && userpw === 'admin') {
        // 쿠키를 생성
            // payload 에 뭘 넣을까~ 
        const token = createToken({userid})
        res.cookie('token', token)
        // response
        response.response = { userid }
    } else {
        // response
        // 쿠키를 생성하지않는 코드
        response.error = '아이디와 패스워드가 일치하지 않습니다.'
    } 
    res.json(response)
})

app.post('/user/logout', (req, res) => {    
    res.send('로그아웃 테스트')
})

app.listen(3500, () => {
    console.log('서버시작')
})
const express = require('express')
const app = express()
const cors = require('cors')
const nunjucks = require('nunjucks')
const axios = require('axios')
const qs = require('qs') // {a : 'asdf', b : 'aa' } => a=asdf&b=aa

/*
REST API 키   eee2d2bea028f84715a10596af4dd5f4
Redirect URI : http://localhost:3005/auth/kakao
Client Secret코드   4Txhm0btiHNucBRsc3ga9zYuJU5ueVTj
*/

const client_id = "48d0bbec8d37775d62f082257ce6de34";
const redirect_uri = "http://localhost:3005/auth/kakao";
const client_secret = "b8ccYk3SwxNtxgtN0TWliS7bxsRnCgs6";
const host = "https://kauth.kakao.com";

app.set('view engine', 'html')
nunjucks.configure('views', {
    express:app,
})

app.use(cors())

app.get('/', (req, res)=> {
    res.render('index')
})

app.get('/kakao/login', (req, res)=> {
    const redirect = `${host}/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
    // /oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code
    res.redirect(redirect) // 실제 kakao 주소로 보낼거에요
})

app.get('/auth/kakao', async (req, res)=> { // 에러나려나?
    const {query:{code}} = req

    // axios 
    // 1. url
    // 2. data = body 내용
    // 3. header = option
    const body = qs.stringify({
        grant_type : 'authorization_code',
        client_id,
        redirect_uri,
        code,
        client_secret
    })
    const headers = { 'Content-type' : 'application/x-www-form-urlencoded;charset=utf-8' }
    const response = await axios.post(`${host}/oauth/token`, body, headers) // 리턴값 프로미스
    console.log(response.data)

    try { 
        const { access_token } = response.data
        const url = 'https://kapi.kakao.com/v2/user/me'
        const userinfo = await axios.post(url, null, {
            headers : {
                "Authorization": `Bearer ${access_token}`,
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
            }
        })

        console.log( userinfo.data )
    } catch (e) {

    }


    /*
    카카오톡
    ...
    상단메뉴에 톱니바퀴
    개인/보안
    개인정보 관리
    하단 드래그 -> 카카오계정 및 연결된 서비스
    하단 드래그 -> 연결된 서비스 관리 
    외부 서비스 ->
    */
    res.send('hello')
})

app.post('/oauth/token', (req, res) =>{
    
})

app.listen(3005, ()=>{
    console.log('서버시작')
})
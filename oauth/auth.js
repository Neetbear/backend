const express = require('express');
const app = express();
const cors = require('cors');
const nunjucks = require('nunjucks');
const axios = require('axios');
const qs = require('qs'); // 객체를 쿼리스트링으로 변환 {a : 'asdf', b : 'aa' } => a=asdf&b=aa

/*
    rest api key : 48d0bbec8d37775d62f082257ce6de34
    redirect url : http://localhost:3005/auth/kakao
    secret key   : b8ccYk3SwxNtxgtN0TWliS7bxsRnCgs6
*/
/*
    URL(Uniform Resource Locator)은 자원이 실제로 존재하는 위치를 가리키며, 
    URI(Uniform Resource Identifier)는 자원의 위치뿐만 아니라 자원에 대한 고유 식별자로서 URL을 의미를 포함한다
*/

const client_id = "48d0bbec8d37775d62f082257ce6de34";
const redirect_uri = "http://localhost:3005/auth/kakao";
const client_secret = "b8ccYk3SwxNtxgtN0TWliS7bxsRnCgs6";
const host = "https://kauth.kakao.com";

app.set('view engine', 'html')
nunjucks.configure('views', {
    express:app
})
app.use(cors())

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/kakao/login', (req,res) => {
    // 인가코드 요청
    // /oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code
    const redirect = `${host}/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
    res.redirect(redirect) // 실제 카카오 주소로 보낼예정
})

app.get('/auth/kakao', async (req, res)=> {
    // 매번 id pwd 를 요청하진 않음 이미 로그인 되어 있으면 카카오 로그인 자체는 패스
    const {query:{code}} = req
    /*
        토큰 받기
        POST /oauth/token HTTP/1.1
        Host: kauth.kakao.com
        Content-type: application/x-www-form-urlencoded;charset=utf-8
        
    */
    /*
        1.url
        2.data
        3.headers
        requset
    */
    // 객체를 쿼리스트링으로 변환
    const body = qs.stringify({
        grant_type : 'authorization_code',
        client_id,
        redirect_uri,
        code,
        client_secret
    })
    const headers = { 'Content-type' : 'application/x-www-form-urlencoded;charset=utf-8' };

    try {
        const response = await axios.post(`${host}/oauth/token`, body, headers)
        console.log(response.data);
        const {access_token} = response.data;
        /*  
            GET/POST /v2/user/me HTTP/1.1
            Host: kapi.kakao.com
            Authorization: Bearer ${ACCESS_TOKEN}
            Content-type: application/x-www-form-urlencoded;charset=utf-8
        */
        const url = 'https://kapi.kakao.com/v2/user/me'
        const userinfo = await axios.post(url, null, {
            headers:{
                "Authorization": `Bearer ${access_token}`,
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
            }
        })

        console.log(userinfo.data)
    } catch (e) {
        console.error(e)
    }
    /*
        카카오톡 
        ... 
        상단 메뉴에 톱니바퀴
        개인/보안
        개인정보 관리
        하단 드래그 -> 카카오계정 및 연결된 서비스
        하단 드래그 -> 연결된 서비스 관리
    */

    res.send('hello')
})

app.post('/oauth/token', (req, res) =>{
    res.send(req.body);
})

app.listen(3005, () => {
    console.log('서버시작')
})
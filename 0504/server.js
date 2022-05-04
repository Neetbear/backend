const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const router = require('./routes');

app.use(express.urlencoded({extended:true}));
// express.urlencoded({extended:false}) -> nodejs 내장된 querystring모듈을 사용합니다
// express.urlencoded({extended:true}) -> express 내의 qs 모듈 사용 -> obj 객체를 다룰수 있게됨 -> x-www-form-urlencoded형태의 데이터
// 데이터 json 형태일시 express.json()~~
// 둘다 사실은 body-parser 미들웨어 이용 (body-parse도 이젠 express 내장 모듈)
// 페이로드 사용가능하게 확장 // request message body req.body

app.set('view engine', 'html');
nunjucks.configure('views', {
    express:app
})

app.use(router);

app.listen(3000, () => {
    console.log('서버 시작')
})
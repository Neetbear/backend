const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const router = require('./routes');

app.use(express.urlencoded({extended:true}));
// 페이로드 사용가능하게 확장 // request message body req.body

app.set('view engine', 'html');
nunjucks.configure('views', {
    express:app
})

app.use(router);

app.listen(3000, () => {
    console.log('서버 시작')
})
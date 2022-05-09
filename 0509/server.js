const express = require('express')
const app = express();

app.use((req,res,next) => {
    // console.log('쿠키를 찾아볼까?');
    // console.log(req.headers.cookie.split('=')[1]);
    // req.cookie = req.headers.cookie.split('=')[1]; 
    // 좀 더 좋게 조작
    const {cookie} = req.headers;

    // const cookies = cookie.split(';');
    // const newArr = [];
    // for(let i = 0; i < cookies.length; i++) {
    //     console.log(cookies[i].trim()); // trim 빈칸 제거 datatype string
    //     newArr.push(console[i].trim());
    // }
    // console.log(newArr);

    const cookies = cookie.split(';').map(v => v.trim().split('=')).reduce((acc, val) => { // acc : 이전 값
        acc[val[0]] = val[1];
        return acc;
    }, {}); 
    // console.log(cookies);
    // map 쓰면 쉽다 
    // map 인자값 콜백함수/ 콜백함수 인자값 배열의 각 요소 -> 배열의 각 요소들 다루는 방법
    // (value) => {return value.trim()} 이런 느낌

    // reduce는 내가 배열인 상태의 애들을 객체로 
    // const cookies2 = cookies.reduce((acc, val) => { // acc : 이전 값
    //     acc[val[0]] = val[1];
    //     return acc;
    // }, {})
    // console.log(cookies2);

    req.cookie = cookies;

    next();
})


app.get('/', (req, res) => {
    console.log(req.cookie)
    res.send("Hello world");
})

app.get('/cookie', (req, res) => {
    res.send("Hello cookie")
})

app.get('/setCookie', (req, res) => {
    const time = 60 ;
    res.setHeader('Set-Cookie', 'name2=cookie; httpOnly=true; path=/').send('Hello setCookie')
    // setHeader -> send, render, json 전에 즉 응답 전에 header를 수정 (여기선 쿠키를 만들거다)
    // send render json -> 서버가 브라우저한테 response message를 완벽하게 만들어서 보내주기
    // 'Set-Cookie' 로 쿠키 생성시 키 밸류 쌍으로 브라우저에 저장 브라우저 종료전까지 계속 전달됨 (req.header)
    /*
        http 통신 프로토콜에서
        set-Cookie에 대한 문법이 따로 존재 -> 그것만 지켜주면 http only 가능
    */
    /*
        로그인을 했는데, 5분 뒤에 로그인 풀려 -> 5분뒤에 쿠키가 사라지면 됨

        Expires : 기간 설정 (자동 로그인 유지기간, 팝업창 일주일 안보기)
        Max-age : 짧은 시간에 많이 사용 -> 수업은 이거 사용 예정 / 초 단위
    */
    /*
        path : 특정 path에서만 사용하겠다
    */
})

app.listen(3000, () => {
    console.log('서버시작')
})
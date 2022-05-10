# React Project 를 생성합시다

-> npx create-react-app front

폴더구조 / react

- back : http 서버 관련 (express)
    npm init -y
    npm install express
    server.js -> 3500 port
    npm install cors 
    app.use(cors()) -> cors는 미들웨어니까 

- front : react 

```
    /*
        handle click 눌렀을때
        post로 요청 /getCookie로 요청을 보내고
        router middleware -> cookie-parser cookie 생성, 
        응답을 줌,
        response header set-cookie 정보가, 
        브라우저 생성
        credential
    */
```
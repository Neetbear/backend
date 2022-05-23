### 학습의 목표

ws://  녀석을 조금이라도 이해하는게 목표

공부할수 있는 초기 세팅

socket.id(x)

```
/*
공부할때 1. 공식문서 사용법 공부 2. github에서 예제 코드 검색해서 사용법 확인
ws : https://developer.mozilla.org/ko/docs/Web/API/WebSocket
   : https://www.npmjs.com/package/ws
websocket 실제로 돌아가는 것 http

websocket 서버를 연사람이 server 
ws의 프로토콜은 ws -> http아닌거 주의 

프로토콜 핸드셰이크
clinet 연결 요청
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw== => 특정한 사람에게만 전달할때 필요
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com

server 연결 인증에 대한 응답부분
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
*/
```

express + (websocket -server) 하나의 서버로도 가능하다

npm init -y
npm install express nunjucks ws

express websocket 둘다 3000번 포트 
client가 요청 쏘면?
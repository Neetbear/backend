const webSocket = require('ws')

let sockets = [];
// 단, 배열은 시간복잡도상 비효율적
module.exports = (server) => {
    const wss = new webSocket.Server({ server })
    // wss는 서버 ws는 url(port)

    wss.on('connection', (ws, req) =>{
        // console.log("Hello Socket!!!")
        // console.log(ws)
        // console.log(ws._socket.remoteAddress)
        // console.log(req.socket.remoteAddress)
        // console.log(req.headers)
        ws.id = req.headers['sec-websocket-key']
        // {
        //     req.headers['sec-websocket-key']:ws
        // }
        sockets.push[ws]

        // 연결된 사람에게만 메시지 던지겠다 string으로 던져야함
        // ws.send('web7722님 환영합니다')

        const obj1 = {type:'message', payload:'web7722님 환영합니다'}
        const obj2 = {type:'add', payload:1}
        ws.send(JSON.stringify(obj1))
        ws.send(JSON.stringify(obj2))

        ws.on('close', () => {
            console.log('사용자가 도망쳤다')
            sockets = sockets.filter(v => v.id !== ws.id)
            console.log(sockets.length)
        }) // 사용자가 나가면 발동 
    })
    // connection 이 이뤄지는 코드는 아니다
    // request가 들어왔을때 cb실행 
    // cookie 있으면 req.headers에 쿠키도 들어있다
    // ws엔 연결에 의한 프로토콜 헨드쉐이크 들어있다

    function broadcast() {
        sockets.forEach(ws => {
            if(ws.id !== id) ws.send(data)
        })
    }
}
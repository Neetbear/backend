// const crypto = require('crypto-js')
const crypto = require('crypto')

const header = {
    "alg": "HS256",
    "typ": "JWT"
}

const payload = {
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
}

// base64

// Buffer.from('string')
//console.log( Buffer.from(JSON.stringify(header)) ) // 16진수

Buffer.from( JSON.stringify(header).toString('base64').replace('==', '').replace('=', '') ) // ASCII -> 

// bit = == 

// 암호화할때 인코딩
const encodingHeader = Buffer.from( JSON.stringify(header))
                             .toString('base64')
                             .replace(/[=]/g,'')
//console.log(encodingHeader) // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

// 복호화할때 디코딩
const decodingHeader = JSON.parse(Buffer.from( encodingHeader, 'base64').toString())
// console.log(decodingHeader) // { alg: 'HS256', typ: 'JWT' }


const encodingPayload = Buffer.from(JSON.stringify(payload))
                              .toString('base64')
                              .replace(/[=]/g,'')
//console.log(encodingPayload) // eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ

// const signature = crypto.SHA256(`${encodingHeader}.${encodingPayload}`,salt ).toString() // 해쉬값 -> base64 인코딩

// const encodingSignature = Buffer.from( signature )
// .toString('base64')
// .replace('==', '')
// .replace('=', '')

// sha256 
const salt = 'ingoo'

const signature = crypto.createHmac('sha256', salt)
                        .update(`${encodingHeader}.${encodingPayload}`)
                        .digest('base64')
                        .replace(/[=]/g,'')


// console.log('result :',`${encodingHeader}.${encodingPayload}.${signature}`)

// 단반향 암화호를 진행함 우리가 잘아는 SHA-256
/*
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
    // 데이터양을 줄일려고.. 
*/



/*
    ABC -> asdfsadfasdf
    asdfsadfasdf -> ABC
    // 양방향
    아니면 단방향
*/ 
const encoding = (value) => {
    return Buffer.from(JSON.stringify(value))
                 .toString('base64')
                 .replace(/[=]/g,'')
}

const createToken = (state) => {
    const salt = 'ingoo'
    const header = {  "alg": "HS256", "typ": "JWT" }
    const payload = { ...state }

    const encodingHeader = encoding(header)
    const encodingPayload = encoding(payload)
    const encodingSignature = crypto.createHmac('sha256', salt)
                                    .update(`${encodingHeader}.${encodingPayload}`)
                                    .digest('base64')
                                    .replace(/[=]/g,'')

    return `${encodingHeader}.${encodingPayload}.${encodingSignature}`
}

// console.log(createToken({ name:'ingoo' }))
// console.log(createToken({ name:'web7722' }))
// console.log(createToken({ userid:'web7722' }))

// createToken({ name:'ingoo', age:33 })

module.exports = createToken

/*
    1. JWT 토큰을 만드는것을 직접 구현하기

    2. 로그인 로직 이해하기
        2-1. 로그인 화면이 필요.
            2-1-1. 리액트 디렉토리를 만들어야함,
            2-1-2. 로그인화면 완료
            2-1-3. 로그인 submit시 요청코드 만들기 axios

        2-2. Back 서버에 내용을 전달 (post body(userid, userpw))    요청
        2-3. Back 에서 body(userid, userpw) 읽고,                  back 콘솔
        2-4. Back 에서 userid, userpw에 대한 [DB조회]  admin admin                                    
        2-5. DB조회 결과에 따른 로직
            2-5-1. 조회가 안되었을때
                쿠키를 생성하지않고, 브라우저에게 오류를 전달
            2-5-2. 조회가 되었을때
                쿠키를 생성해서, 브라우저에 전달
    
    3. API 설계
        back 3500
        front 3000

        POST /user/login {userid, userpw} : cookie 생성
        POST /user/logout {} : cookie 삭제

*/
const session = {
    web7722:true,
    ingoo:true,
}

// 구분값은 쿠키를 활용
// 세션 쿠키

/*
    쿠키:쿠키 / 웹
    세션:쿠키+세션 / 서버
*/
/*
    데이터를 계속 가지고 다녀야한다
    ?idx=1&userid=web7722 -> 쿠키/세션 사용 시 라고 적고 다닐 필요 없어진다 
*/

/*
    쿠키 옵션중 중요한거 
        path -> 특정 쿠키를 특정 path에서만 사용하겠다
        expires/max-age 
        http only (이거 사용시 document.cookie 불가 -> 자바스크립트로 쿠키 조작 불가)
            -> http 통신 프로토콜에서 set-Cookie에 대한 문법지켜줘야 함
        secure
        same site -> https 배포용
*/
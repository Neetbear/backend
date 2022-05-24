## Typescript 
진입장벽이 높다 
문법이 어려운게 아니라 개념이 어렵다

OOP 객체지향적 사고가 필요하다
express 자체가 객체지향이 아니다
express에 typescript? 말이 안된다

React는 그나마 가능하다 -> 컴포넌트 구조가 그나마 객체지향과 비슷하다
일단 웹팩이 기본적으로 사용되어있기 때문에 실행자체를 간단하게 할 수 있다

프론트로 먼저 해보고, 그 다음에 백앤드로 넘어가는데, 
이때 express는 안되고 nestjs(배우는것 추천) 
    nestjs는 기본적으로 돌아가는 구조가 express
    nextjs는 react 프레임워크(SSR지원) 혼동주의  

## OOP
https://alphahackerhan.tistory.com/40
“모든 학생들에 대해서, 각 학생들이 다음 수업을 듣기 위해 어디로 가야하는지 알려주는" 프로그램은 짠다고 가정

- Instructor
학생들에게 다음 클래스로 가라고 알려주는 객체

- Student
자기들이 현재 어떤 클래스에 있는지 아는 객체
다음 클래스로 어디로 가야하는지 아는 객체
이전 클래스에서 다음 클래스로 가는 객체

- Classroom
클래스의 위치를 가지고 있는 객체

- Direction Giver
두 개의 클래스가 주어지면 (현재 클래스, 다음 클래스), 다음 클래스로 가는 방향을 알려주는 객체

## typescript 장점
let a:1;
function add(a,b) {
    return a+b;
}
add(null, null)
=> javascript의 경우 실행시켰을때 오류를 안다

function add(a:number,b:number) {
    return a+b;
}
add(null, null)
=> typescript의 경우 add()에 넣자마자 안다

실행전 작성 중에 에러를 알 수 있다

## webpack
번들 시스템 (하나로 뭉쳐준다)
nestjs, typescript 등등 변환시 필수적
-D : 개발환경에서만 필요한 모듈

a.js 
b.js  -> webpack -> web.js

nodejs 환경에서 돌아갑니다

| - /node_moudules
| - /dist
| - /src
| -- a.js
| -- b.js
| - package-lock.json
| - package.json

npm init - y
npm install -D webpack -> 없어도 되는듯?
npm install -D webpack-cli
npx webpack build ./src/a.js

/*
    a.js 파일을 dist/main.js 라고 해준거

    default ./dist
    filename: main.js
    설정을 통해서 바꿀수는 있다

    a.js 에다가 아무것도 안넣어서 어떻게 돌아가는지 모른다
*/

npx webpack build ./src/a.js -o app 
-o 폴더명 지정 
등등 명령어로도 가능하나 매번 할 수 없으니 파일 생성 -> webpack.config.js

npx webpack -> webpack.config.js 내용을 default로 한다

### Path.join() vs Path.resolve()
#### Path.join()
메소드명처럼 인자로 받은 경로들을 하나로 합쳐서 문자열 형태로 path를 리턴한다.
#### Path.resolve()
resolve도 join과 마찬가지로 인자로 받은 경로들을 하나로 합쳐러 문자열 헝태로 리턴한다.
하지만 다른점은 전달받은 경로인자들의 맨 오른쪽 부터 왼쪽으로 경로인자들을 합쳐나간다

webpack -> 우리의 파일을 받아서 다른 파일로 (단순 번들링이 아니라 파일 변환도 가능)
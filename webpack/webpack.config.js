const path = require('path')

module.exports = {
    entry: { // 너가 번들링할 파일 내용(or 내용 들)
        app:'./src/a.ts'
    },
    module:{
        rules: [
            {
                test: /\.ts$/, // 정규표현식 ts 확장자를 찾음. '.ts'도 가능
                use: 'ts-loader', // ts-loader 라이브러리 사용 -> 이 시점에 ts파일 앎
                                  // ts-loader는 tsconfig.json 필요 -> webpack의 config.js 느낌
                exclude: '/node_modules/', // 이 폴더는 건들지 말아라
            }
        ],
    },
    output:{
        filename: 'server.js',
        path:path.join(__dirname, 'app'), // 절대경로만 된다
    }
}
# db 연결해보기

npm init -y
npm install mysql2

```javascript
// npm install mysql2 는 드라이버 설치입니다. 연결을 도와주는
```

파일생성하기 
db.js
```javascript
const mysql = require('mysql2/promise');

const pool = mysql.createpool({
    host:'127.0.0.1',
    user:'root',
    password:'85354351'
})
```

```sh
npm install express nunjucks
```

nunjucks 문법 주의
```
{% for item in items %}
<tr>
    <td>{{item.idx}}</td>
    <td>{{item.subject}}</td>
    <td>{{item.name}}</td>
    <td>{{item.date}}</td>
    <td>{{item.hit}}</td>
</tr>
{% endfor %}
```
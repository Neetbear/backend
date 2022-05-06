const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'85354351',
    database:'homepage'
})

console.log(pool);

async function select() {
    try {
        console.log("try");
        const sql = `SELECT * FROM board`;
        const [result] = await pool.query(sql);
        console.log(result);
    } catch (e) {
        console.log(e);
    }  
    // pool.query는 알아서 쓰고 반환까지 함 release 필요없음
    // finally {
    //     console.log("성공 실패 상관없이 실행")
    //     // pool.release();
    // }
}

select();

module.exports = pool;
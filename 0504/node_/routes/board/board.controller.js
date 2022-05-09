const pool = require('../../db.js')

const view = async (req, res) => {
    try {
        const [[result]] = await pool.query(`SELECT * FROM board WHERE idx=${req.query.idx}`);
        console.log(result);
        res.render(`board/view`, {
            idx:req.query.idx,
            item:result
        });
    } catch (e) {
        console.error(e)
    }
}

const list = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM board');
        console.log(result);
        res.render('board/list', {
            items:result
        });
    } catch (e) {
        console.error(e)
    }
}

const write = (req, res) => {
    res.render('board/write');
}

const update = async (req, res) => {
    try {
        const [[result]] = await pool.query(`SELECT * FROM board WHERE idx=${req.query.idx}`)
        res.render('board/update', {
            item:result
        });
    } catch (e) {
        console.log(e)
    }
}


const deleteAction = async (req, res) => {
    try {
        const [result] = await pool.query(`DELETE FROM board WHERE idx=${req.query.idx}`)
        console.log(result);
        res.redirect('/board/list');
    } catch (error) {
        console.log(error);
    }
}

const writeAction = async (req, res) => {
    try {
        const [result] = await pool.query(`INSERT INTO board (subject, name, content) VALUES ('${req.body.subject}','${req.body.name}','${req.body.content}')`);
        console.log(result.insertId);
        res.redirect(`/board/view?idx=${result.insertId}`);
    } catch (error) {
        console.log(error);
    }
}

const updateAction = async (req, res) => {
    try {
        const [result] = await pool.query(`UPDATE board SET subject='${req.body.subject}', name='${req.body.name}', content='${req.body.content}' WHERE idx=${req.query.idx}`)
        console.log(result)
        res.redirect(`/board/view?idx=${req.query.idx}`);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    view, list, update, write,
    deleteAction, updateAction, writeAction
}
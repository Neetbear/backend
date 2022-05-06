const pool = require('../../db.js')

const view = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM board WHERE idx=${req.query.idx}`);
        console.log(result);
        res.render(`board/view`, {
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

const update = (req, res) => {
    res.render('board/view');
}

const write = (req, res) => {
    res.render('board/write');
}


const deleteAction = (req, res) => {
    res.render('board/list');
}

const writeAction = (req, res) => {
    res.render('board/view');
}

const updateAction = (req, res) => {
    res.render('board/view');
}

module.exports = {
    view, list, update, write,
    deleteAction, updateAction, writeAction
}
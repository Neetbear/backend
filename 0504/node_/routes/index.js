const express = require('express');
const router = express.Router();
const boardRouter = require('./board');

router.get('/', (req, res) => {
    res.render('index');
})

router.use('/board', boardRouter);

module.exports = router
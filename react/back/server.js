const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(3500, () => {
    console.log('서버시작')
})
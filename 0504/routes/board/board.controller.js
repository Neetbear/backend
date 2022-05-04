const list = (req, res) => {
    res.render('board/list')
}

const view = (req, res) => {
    // console.log(req.query.idx, req.query.name);
    // 1. 내가 내용을 가지고 올 수 있는가 -> req.query.idx
    // 2. html에 넘길 수 있는가 -> , {idx:req.query.idx}
        // 2-1. template engine 개념
        // 템플릿 엔진은 변수를 사용하면 변수의 결과물로 html을 완성해주는 기능
        // render 메서드에서 1번 인자는 경로 2번 인자는 object 
        // object에 원하는 데이터 넣어서 던져주면 된다
    res.render('board/view', {idx:req.query.idx, name:req.query.name})
}

const update = (req, res) => {
    // console.log("update ", req.query.name)
    res.render('board/update', {idx:req.query.idx, name:req.query.name})
}

const write = (req, res) => {
    res.render('board/write')
}

const writeAction = (req, res) => {
    res.redirect(`/board/view`)
}

const updateAction = (req, res) => {
    // name 값을 가져올 수 있는가
    console.log(req.body.name, req.body.idx)
    res.redirect(`/board/view?idx=${req.body.idx}&name=${req.body.name}`)
}

const deleteAction = (req, res) => {
    res.redirect('/board/list')
}

module.exports = {
    list, view, write, update,
    writeAction, updateAction, deleteAction
}
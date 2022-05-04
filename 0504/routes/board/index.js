const express = require('express')
const boardRouter = express.Router()
const boardController = require('./board.controller.js')

boardRouter.get('/list', boardController.list)
boardRouter.get('/view', boardController.view)
boardRouter.get('/write', boardController.write)
boardRouter.get('/update', boardController.update)

boardRouter.post('/write', boardController.writeAction)
boardRouter.post('/update', boardController.updateAction)
boardRouter.get('/delete', boardController.deleteAction)
// get으로 만들어서 a tag으로 작동시켜도 가능

module.exports = boardRouter
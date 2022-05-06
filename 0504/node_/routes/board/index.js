const express = require('express');
const boardRouter = express.Router();
const boardController = require('./board.controller.js');

boardRouter.get('/view', boardController.view);
boardRouter.get('/list', boardController.list);
boardRouter.get('/update', boardController.update);
boardRouter.get('/write', boardController.write);

boardRouter.get('/delete', boardController.deleteAction);
boardRouter.post('/write', boardController.writeAction);
boardRouter.post('/update', boardController.updateAction);

module.exports = boardRouter
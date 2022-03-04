const route = express.Router()
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const express = require('express');

//o index aqui é o index.ejs
// o / é o meu domínio
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: create-pass}))
route.get('/room/:room', (req, res) => res.render("room"))

//exemplo do formato que vamos passar p/ rota
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)

module.exports = route


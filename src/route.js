const route = express.Router()
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const express = require('express');

//o index aqui é = index.ejs
// o / é o meu domínio
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: create-pass}))//passando uma variável aqui dentro

route.get('/room/:room-id', (req, res) => res.render("room"))

//exemplo do formato que vamos passar p/ rota
route.post('/room/:room/:question/:action', QuestionController.index)
//usamos os ':' pq aqui não sabemos os ids, os conteúdos que virão.
route.post('/room/create-room', RoomController.create)
module.exports = route


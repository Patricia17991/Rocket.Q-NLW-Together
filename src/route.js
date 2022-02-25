//onde criaremos nossas rotas
const express = require('express');

//falando quem é o route
const route = express.Router()

//definindo nossas rotas.
//req = requisição, res = resposta
//o index aqui é = index.ejs
// o / é o meu domínio
route.get('/', (req, res) => res.render("index"))
route.get('/room', (req, res) => res.render("room")
)
route.get('/create-pass',(req, res) => res.render("create-pass"))
route.get('/room/:room/:question/:action', (req, res) => res.render()) //usamos os ':' pq aqui não sabemos os ids, os conteúdos que virão.

module.exports = route
//o browser aparentmente so consegue fazer a função get

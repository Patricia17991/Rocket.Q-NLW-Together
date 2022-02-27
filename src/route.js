const express = require('express');

//falando quem é o route
const route = express.Router()
route.get('/', (req, res) => res.render("index"))// o / é o meu domínio
route.get('/room', (req, res) => res.render("room"))
route.get('/create-pass',(req, res) => res.render("create-pass"))

//exemplo do formato da rota:
//route.post('/room/:room/:question/:action')
//usamos os ':' pq aqui não sabemos os ids, os conteúdos que virão.

module.exports = route



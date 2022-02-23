//onde criaremos nossas rotas
const express = require('express');

//falando quem é o route
const route = express.Router()

//definindo nossas rotas.
//req = requisição, res = resposta
//o index aqui é = index.ejs
// o / é o meu domínio
route.get('/', (req, res) => res.render("index"))

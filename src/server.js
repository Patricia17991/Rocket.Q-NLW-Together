//responsável por iniciar nosso servidor.

//importando o express
const express = require('express')
//importanto o route
const route = require('./route')

//criando o server
const server = express()

//configurando o ejs
server.set('view engine', 'ejs')

server.use(route)

//pegando o server e passando uma porta p/ ele
server.listen(3000, () => console.log("rodando!"))

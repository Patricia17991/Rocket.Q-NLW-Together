//responsável por iniciar nosso servidor.

//importando o express
const express = require('express')
//importanto o route
const route = require('./route')
const path = require('path')//modulo que usaremos p/ colocar rota da pasta views

//criando o server
const server = express()

//configurando o ejs
server.set('view engine', 'ejs')

//dizendo onde esta a pasta View
server.set('views',path.join(__dirname, 'views'))

server.use(route)

//pegando o server e passando uma porta p/ ele
server.listen(3000, () => console.log("rodando!"))

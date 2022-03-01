const express = require('express')
const route = require('./route')
const path = require('path')//modulo que usaremos p/ colocar rota da pasta views

//criando o server
const server = express()

//configurando o ejs
server.set('view engine', 'ejs')

server.use(express.static("public"))

//dizendo onde esta a pasta View
server.set('views',path.join(__dirname, 'views'))

//sempre antes d rota, configurando midure
server.use(express.urlencoded({extended: true})) //o form vem aqui antes de ir pra controller

server.use(route)

//pegando o server e passando uma porta p/ ele
server.listen(3000, () => console.log("rodando!"))





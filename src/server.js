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

server.use(express.urlencoded({extended: true})) //pegar conteúdo do form, decodificar e passar p/ o controller

server.use(route)

server.listenerCount(3000, () => console.log("RODANDO"))

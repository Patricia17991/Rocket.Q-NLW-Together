//importando o express
const express = require('express')

const route = require('./route')//importanto o route
const path = require('path')//modulo que usaremos p/ colocar rota da pasta views
const server = express()//criando o server

server.set('view engine', 'ejs')//configurando o ejs
server.use(express.static("public"))//dizendo p/ express que vamos usar a pasta public
server.set('views',path.join(__dirname, 'views'))//dizendo onde esta a pasta View
server.use(route)


//pegando o server e passando uma porta p/ ele
server.listen(3000, () => console.log("rodando!"))  




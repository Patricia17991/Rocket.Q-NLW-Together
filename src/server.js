//responsável por iniciar nosso servidor.

//importando o express
const express = require('express');

//criando o server
const server = express()

//pegando o server e passando uma porta p/ ele
server.listen(3000, () => console.log("rodando!"))

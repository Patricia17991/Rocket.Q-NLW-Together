//configurações do banco de dados
const sqlite3 = require("sqlite3") 
const {open} = require("sqlite") 

module.exports = () => {
    open({
        filename:'/src/db/rocketq.lite' //caminho do nosso banco de dados
    })
}

//rocketq.lite é o nome que escolhemos para o nosso banco de dados

//configurações do banco de dados
const sqlite3 = require("sqlite3") 
const {open} = require("sqlite") 

module.exports = () => 
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    });
//pronto, banco de dados configurado para usarmos



//o open é para abrirmos a conexão com o banco de dados, sempre vamos precisar fazer isso
//no filename passamos qual vai ser o arquivo do nosso banco de dados
//para mudar o banco de dados basta mudar o driver

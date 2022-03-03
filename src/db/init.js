//se for usar o await dentro de uma função ela precisará ser uma função async

//primeiro importar nosso banco de dados
const Database = require("./config")

const initDb = {
    //todas as nossas funções
    async init() {
        //criando o banco de dados em si.
        const db = await Database()

        //primeiro comando para criar as tabelas
        await db.exec(`CREATE TABLE rooms(
           id INTERGER PRIMARY KEY,
           pass TEXT
        )`); //onde coloco o código para criar a nossa tabela (onde ficam os códigos SQL).Comandos  sql sempre em maiúculo e o que não for comando em minúculo
        db.exec()
    }

} //iniciando nosso banco de dados

initDb.init() //chamar/executar a função

//esse arquivo roda separadamente fora do projeto

//o AWAIT é uma forma de garantir que o banco de dados vai ser executado da forma correta antes de fazer o que precisa ser feito (para evitar erros na excução)

//o JS não permiti aqui rodar sem o ASYNC (o await não funciona sem o async)

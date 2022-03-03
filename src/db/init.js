//não faz parte do projeto, é apenas um arquivo que precisa ser rodado antes para que as tabelas do banco de dados sejam criadas p/ depois colocarmos o conteúdo lá dentro.

//primeiro importar nosso banco de dados
const Database = require("./config")

const initDb = {
    //todas as nossas funções
    async init() {
        //criando o banco de dados em si.
        const db = await Database()

        //primeiro comando para criar as tabelas
        await db.exec()
    }

} //iniciando nosso banco de dados


initDb.init() //chamar/executar a função

//esse arquivo roda separadamente fora do projeto
//o Js roda muito rápido as funções e para ele não ler elas sem esperar que entreguem um resultado usamos o AWAIT. Para evitar problemas com essa questão

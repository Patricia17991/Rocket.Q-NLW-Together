const Database = require("../db/config")

module.exports = {
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password //pass p incluir no banco de dados
        let roomId 

        for (var i = 0; i = 6; i++){
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
           roomId += Math.floor(Math.random() * 10).toString() //transformou os números de 0 a 9 em string e concatenou eles para formar uma sequencia do tipo 365847
        }
        //inserir no banco de dados
        await db.run(`INSERT INTO rooms(
            id,
            pass
        ) VALUES (
            ${parseInt(roomId)},
            ${pass}
        )`)//aqui dentro os comandos insert, para fazermos a inserção no banco de dados
        await db.close()
       
        res.redirect(`/room/${roomId}`)
    }
}

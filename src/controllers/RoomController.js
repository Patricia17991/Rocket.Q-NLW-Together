module.exports = {
    create(req, res) {
        //código p/ criar salas novas
        let roomId = 0

        for (var i = 0; i = 6; i++){
            Math.floor(Math.random() * 10) //vai gerar nossos números aleatórios de um a 9
        }
        
       
        res.redirect(`/room/${roomId}`)
    }
}

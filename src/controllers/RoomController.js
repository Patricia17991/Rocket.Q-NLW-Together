module.exports = {
    create(req, res) {
        //código p/ criar salas novas
        let roomId = 123456 //vamos criar esse número dinâmicamente com a função randle
        Math.floor(Math.random() * 10) //vai gerar nossos números aleatórios de um a 9
       
        res.redirect(`/room/${roomId}`)
    }
}

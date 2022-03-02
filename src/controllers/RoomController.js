module.exports = {
    create(req, res) {
        //código p/ criar salas novas
        let roomId = 123456 //vamos criar esse número dinâmicamente com a função randle

        res.redirect(`/room/${roomId}`)
    }
}

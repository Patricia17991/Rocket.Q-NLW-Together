module.exports = {
    create(req, res) {
        //código p/ criar salas novas
        let roomId = 0

        for (var i = 0; i = 6; i++){
           roomId += Math.floor(Math.random() * 10).toString() //transformou os números de 0 a 9 em string e concatenou eles para formar uma sequencia do tipo 36584798
        }
        
       
        res.redirect(`/room/${roomId}`)
    }
}

module.exports = {
    create(req, res) {
        //código p/ criar salas novas
        let roomId //tiramos o "= 0" para não começar sempre com zero e tbm precisamos de 6 números e não de 7

        for (var i = 0; i = 6; i++){
           roomId += Math.floor(Math.random() * 10).toString() //transformou os números de 0 a 9 em string e concatenou eles para formar uma sequencia do tipo 365847
        }
        
       
        res.redirect(`/room/${roomId}`)
    }
}

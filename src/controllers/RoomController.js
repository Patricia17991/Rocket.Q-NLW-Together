module.exports = {
    create(req, res) {
        //código p/ criar salas novas
        let roomId 

        for (var i = 0; i = 6; i++){
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
           roomId += Math.floor(Math.random() * 10).toString() //transformou os números de 0 a 9 em string e concatenou eles para formar uma sequencia do tipo 365847
        }
        
       
        res.redirect(`/room/${roomId}`)
    }
}

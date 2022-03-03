module.exports = {
    create(req, res) {
        //código p/ criar salas novas
        let roomId = 0

        for (var i = 0; i = 6; i++){
           roomId += Math.floor(Math.random() * 10).toString() 
        }
        
       
        res.redirect(`/room/${roomId}`)
    }
}

//vamos mandar o conteúdo da modal para cá
module.exports = {
    index(req, res){

        const roomId = req.params.room
        const questionId = req.params.room
        const action = req.params.action
        const password = req.body.password 


        console.log(`room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`)
    }
}



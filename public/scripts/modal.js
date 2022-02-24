//código especifico da modal
module.exports = function Modal() {
    function open() {
        //funcionalidade de atribuir a classe active para a modal.
         document.querySelector('.modal-wrapper').classList.add("active")
    }

    function close() {
        //funcionalidade de remover a classe active e fechar a modal.
        
    }

    //retornando as funcionalidades acima
    return {
        open,
        close
    }
}

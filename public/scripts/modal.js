//código especifico da modal
export default function Modal() {
    
    const cancelButton = document.querySelector('.button.cancel')
    
    function open() {
        //funcionalidade de atribuir a classe active para a modal.
         document.querySelector('.modal-wrapper').classList.add("active")
    }

    function close() {
        //funcionalidade de remover a classe active e fechar a modal.
        document.querySelector('.modal-wrapper').classList.remove("active")
    }

    //retornando as funcionalidades acima
    return {
        open,
        close
    }
}

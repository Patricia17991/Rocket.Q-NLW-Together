//código especifico da modal


export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper') //para não precisar repetir o código tirado

    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open() {
        //funcionalidade de atribuir a classe active para a modal.
        modalWrapper.classList.add("active")

    }

    function close() {
        //funcionalidade de remover a classe active e fechar a modal.
        modalWrapper.classList.remove("active")
        
    }

    //retornando as funcionalidades acima
    return {
        open,
        close
    }
}

    export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper') //para não precisar repetir o código tirado

    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open() {
        modalWrapper.classList.add("active")

    }

    function close() {
        modalWrapper.classList.remove("active")
        
    }

    //retornando as funcionalidades acima
    return {
        open,
        close
    }
}

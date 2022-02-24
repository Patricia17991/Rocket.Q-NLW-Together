//aqui colocamos todo o código de script que tivermos

import Modal from './modal.js'//importando o arquivo da modal

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll("a.actions a.check")//pegar botões com class="check"

//usamos o eventlistener p/ saber quando algum botão foi clicado por exemplo.
checkButtons.forEach( button => {
    button.addEventlistener("click", handleClick)
      

}) //percorrer todos os botões.(código p/marcar como lido)

//botão excluir
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", handleClick(event, check = false))
})

function handleClick(event, check = true) {
    modalTitle.innerHTML = check ? "Marcar como lido" : "Excluir essa pergunta?"  

    modal.open()//abrir modal
}





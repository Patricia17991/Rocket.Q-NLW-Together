//aqui colocamos todo o código de script que tivermos

import Modal from './modal.js'//importando o arquivo da modal

const modal = Modal()

const checkButtons = document.querySelectorAll("a.actions a.check")//pegar botões com class="check"

//usamos o eventlistener p/ saber quando algum botão foi clicado por exemplo.
checkButtons.forEach( button => {
    button.addEventlistener("click", event => {
        //aqui: o que vai fazer quando escutar o click.
        modal.open() //abrir modal
    })

}) //percorrer todos os botões.(código p/marcar como lido)

//botão excluir
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", event => {
        modal.close()
    })
})



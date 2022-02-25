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
    button.addEventListener("click", (event) =>  handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault() //para parar de alterar a nossa url pq os links agora não se comportam como links comuns

    const text = check ? "Marcar como lida" : "Excluir" 

    const roomId = document.querySelector("#room-id").dataset.id

    const form = document.querySelector(".modal form")//pegando o form
    form.setAttribute("action", `/room/:room/:question/:active`)//atributo que vamos mudar dele é o action
                     //id,número da questão,ação
    
    //concatenação do titulo + a pergunta
    modalTitle.innerHTML = `${text} esta pergunta?`

    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?` //toLowerCase p/trocar o 'M' por 'm' ...
    modalButton.innerHTML = `sim, ${text.toLowerCase()}`
    
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red") //remove ou coloca a class button, p/ só o botão excluir ficar vermelho 

    modal.open()//abrir modal
}


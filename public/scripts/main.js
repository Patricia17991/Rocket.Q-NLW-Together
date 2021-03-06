import Modal from './modal.js'

const modal = Modal()
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll("a.actions a.check")

//usamos o eventlistener p/ saber quando algum botão foi clicado por exemplo.
checkButtons.forEach( button => {
    button.addEventlistener("click", handleClick)
      

}) //percorrer todos os botões.(código p/marcar como lido)


const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) =>  handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault() //para parar de alterar a nossa url pq os links agora não se comportam como links comuns
  
    const text = check ? "Marcar como lida" : "Excluir" 
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)//url p/ onde vai o formulário
    
    
    modalTitle.innerHTML = `${text} esta pergunta?`

    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?` 
    modalButton.innerHTML = `sim, ${text.toLowerCase()}`
    
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red") 

    modal.open()
}




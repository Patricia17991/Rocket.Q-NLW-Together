//aqui colocamos todo o código de script que tivermos

import { Modal } from './modal'//importando o arquivo da modal

const modal = Modal()

const checkButtons = document.querySelectorAll("a.actions a.check")//pegar botões com class="check"

//usamos o eventlistener p/ saber quando algum botão foi clicado por exemplo.
checkButtons.forEach( button => {
    button.eventlistener("click")
    
}) //percorrer todos os botões.

//pegar quando o 'marcar como lido' for clicado.



modal.open() //abrir modal

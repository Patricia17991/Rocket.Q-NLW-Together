//aqui colocamos todo o código de script que tivermos
import { Modal } from './modal' //importando o arquivo da modal

const modal = Modal()

const checkButtons = document.querySelectorAll("a.actions a.check") //pegar botões com class="check"
//pegar quando o 'marcar como lido' for clicado.



modal.open() //abrir modal

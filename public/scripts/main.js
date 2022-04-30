import Modal from "./modal.js";

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Get check buttons
const checkBtns = document.querySelectorAll('.actions a.check')

checkBtns.forEach(button => {
  // Add listening
  button.addEventListener('click', handleClick)
})

const deleteBtn = document.querySelectorAll(".actions a.delete")

deleteBtn.forEach(button => {
  button.addEventListener('click', (event) => handleClick(event, false))
})

function handleClick(event, check = true){
  event.preventDefault()
  const text = check ? "Marcar como lida" : "Excluir"
  const slug = check ? "check" : "delete"
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id

  const form  = document.querySelector('.modal form')
  form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.textContent = `${text} esta pergunta`
  modalDescription.textContent = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
  check ? modalButton.classList.remove('btn-red') :modalButton.classList.add('btn-red')
  modal.open();
}
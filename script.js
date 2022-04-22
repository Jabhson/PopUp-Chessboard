const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
    const board = document.querySelector('.board');
const boardletters = document.querySelector('.letters');
const boardnumbers = document.querySelector('.numbers');
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let index = 0;
let black = false;
let num = 1;

for (let i = 0; i < 8; i++) {
  let letter = document.createElement('li');
  letter.textContent = letters[i];
  boardletters.appendChild(letter);
  let numbers = document.createElement('li');
  numbers.textContent = num++;
  boardnumbers.appendChild(numbers);
}

for (let i = 1; i <= 64; i++) {
  const square = document.createElement('div');
  if (black) {
    square.classList.add('square');
    square.classList.add('black');
    index++;
    black = !black;
  } else {
    square.classList.add('square');
    square.classList.add('white');
    index++;
    black = !black;
  }
  board.appendChild(square);
  if (index === 8) {
    black = !black;
    index = 0;
  }
}
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
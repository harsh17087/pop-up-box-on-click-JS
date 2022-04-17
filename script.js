'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/* KeyBoard events are global events which happens on whole document 
   unlike mouse events which responds to particular elements    */

/* We want that user can close the modal window with the help
   of Esc key also. Below are the points we have to take care of */

/* 1. Add event handler for keyboard press
   2. Check if Esc is pressed
   3. If Yes, check wheteher Modal Window is opened or not
   4. if yes, then the class 'hidden' will be included in the modal classList. */
document.addEventListener('keydown', function (e) {
  // console.log(e.key); display
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

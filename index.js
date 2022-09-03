// let myLibrary = [];
//
// function Book () {
// //where the constructor goes
// }
//
// function addBookToLibrary () {
//
// }

//Get modal
const modal = document.getElementById("addBookModal")

//Get button that opens the modal
const btn = document.getElementById("addBook")

const span = document.querySelector(".close")

const overlay = document.querySelector(".overlay")

//When the user clicks the button, open the modal Form
// document.querySelector('.modal').addEventListener('click', e => {
//   document.body.classList.add('show-modal')
// })

// btn.onclick = function() {
//   modal.style.display = "block";
// }
//
// span.onclick = function() {
//   modal.style.display = "none";
// }
//
//
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


const openAddBookModal = () => {
  modal.classList.add('active')
  overlay.classList.add('active')
}

const closeBookModal = () => {
  modal.classList.remove('active')
  overlay.classList.remove('active')
}



btn.onclick = openAddBookModal;
span.onclick = closeBookModal;
overlay.onclick = closeBookModal;

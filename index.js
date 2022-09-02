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

const span = document.getElementsByClassName("close")

//When the user clicks the button, open the modal Form
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

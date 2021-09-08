// Get the modal
let modalOp = document.getElementById("myOptions");

// Get the button that opens the modal
let btnOp = document.getElementById("options_button");

let spanBtn = document.getElementsByClassName("btn")[0];

// Get the <span> element that closes the modal
// let span = document.getElementsByClassName("continue")[0];

// When the user clicks the button, open the modal
btnOp.onclick = function() {
    modalOp.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanBtn.onclick = function() {
    modalOp.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modalOp) {
//         modalOp.style.display = "none";
//     }
// }

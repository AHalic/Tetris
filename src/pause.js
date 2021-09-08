// Get the modal
let modal = document.getElementById("myPause");

// Get the button that opens the modal
let btn = document.getElementById("pause_button");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("continue")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on continue, close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     console.log("entrei aq");
//     if (event.target == modal) {
//         console.log("e tb aq");
//         modal.style.display = "none";
//     }
// }

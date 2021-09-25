// Pega o modal de pausa
let modal = document.getElementById("myPause");

// Pega o botão que abre esse modal
let btn = document.getElementById("pause_button");

// Pega o botão que fecha esse modal
let span = document.getElementsByClassName("continue")[0];

// Ao clicar no botão abre o modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Ao clicar no botão de continue fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

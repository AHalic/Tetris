// Pega o modal de opções
let modalOp = document.getElementById("myOptions");

// Pega o botão de abrir o modal
let btnOp = document.getElementById("options_button");

// Botão de fechar o modal
let spanBtn = document.getElementsByClassName("btn")[0];

// Abrir o modal quando clicar no botão
btnOp.onclick = function() {
    modalOp.style.display = "block";
}

// Fechar o modal quando clicar no x
spanBtn.onclick = function() {
    modalOp.style.display = "none";
}

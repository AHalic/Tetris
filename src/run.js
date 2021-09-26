// Importando classes necessárias
import { Piece } from "./piece.js";
import { Game } from "./game.js";
import BlockImages from "./loadImgs.js";

// Variáveis globais importantes para o jogo
let blockImages = new BlockImages();  
let pause = false;
let piece, nextPiece;
let game; 

// Evento de inicio do jogo (só acontece uma vez)
document.addEventListener("keydown", async function start(event) {
    const SPACE_KEY = 32;
    const keyPressed = event.keyCode;

    if (keyPressed == SPACE_KEY) {
        // Some menu
        document.getElementsByClassName("menu")[0].style.display = "none";
        // Aparece jogo
        document.getElementsByClassName("grid-container")[0].style.display = "inline";

        // Começa a tocar a musica do jogo
        game.themeMusic.play();
        // Remove este evento
        document.removeEventListener("keydown", start);
        
        // Delay de início do jogo 
        await new Promise(r => setTimeout(r, 1500));
        runGame();
    }
});


// Evento de pausar o jogo ao clicar no botão de pause
document.getElementById('pause_button').addEventListener('click', function () {
    pause = true
    document.removeEventListener("keydown", keyEvents);
})


// Evento de pausar o jogo ao clicar no botão options
document.getElementById('options_button').addEventListener('click', function () {
    pause = true;
    document.removeEventListener("keydown", keyEvents);
})


// Eventos de despausar o jogo
document.getElementById('myPause').addEventListener('click', function () {
    if (document.getElementById('myPause').style.display == "none") {
        pause = false;
        document.addEventListener("keydown", keyEvents);
    }
})


document.getElementById('myOptions').addEventListener('click', function () {
    if (document.getElementById('myOptions').style.display == "none") {
        pause = false;
        document.addEventListener("keydown", keyEvents);
    }
})


// Função que adiciona o evento de ao clicar space bar recomeça o jogo 
// (chamada apenas ao terminar o jogo)
async function restartGame() {
    // Mostra a imagem de game over e deixa fundo opaco
    let image = document.getElementsByClassName("End")[0];
    image.style.display = "block";
    document.getElementById("game").style.opacity = "0.2";
    
    await new Promise(r => setTimeout(r, 2200));
    game.themeMusic.play();


    document.addEventListener("keydown", async function restart(event) {
        const SPACE_KEY = 32;
        const keyPressed = event.keyCode;
        if (keyPressed === SPACE_KEY) {
            // Esconde a imagem e reinicia o jogo
            image.style.display = "none";
            document.getElementById("game").style.opacity = "1";
            game.themeMusic.pause();
            buildGame();

            game.themeMusic.play();
            document.removeEventListener("keydown", restart);

            // Delay para início do jogo
            await new Promise(r => setTimeout(r, 1500));
            runGame();
        }
    });
}


// Função de eventos do jogo para movimentação da peça
function keyEvents(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    const SHIFT_KEY = 16;
    const keyPressed = event.keyCode;

    if (keyPressed == DOWN_KEY) {
        piece.downPiece(game.matrix);
        game.drawMatrix(blockImages);
        piece.drawPiece(game.boardContext);
    }
    else if (keyPressed == UP_KEY) {
        piece.rotate(game.matrix);
        game.drawMatrix(blockImages);
        piece.drawPiece(game.boardContext);
    }
    else if (keyPressed == LEFT_KEY) {
        piece.leftPiece(game.matrix);
        game.drawMatrix(blockImages);
        piece.drawPiece(game.boardContext);
    }
    else if (keyPressed == RIGHT_KEY) {
        piece.rightPiece(game.matrix);
        game.drawMatrix(blockImages);
        piece.drawPiece(game.boardContext);
    }
    else if (keyPressed == SHIFT_KEY) {
        while (piece.downPiece(game.matrix));
        game.drawMatrix(blockImages);
        piece.drawPiece(game.boardContext);
    }
}


//  Função do loop principal do jogo
function loop(nextPiece){

    setTimeout( function onTick() {
        if (game.over()){
            game.themeMusic.pause();
            game.endAudio.play();
            restartGame();
            return;
        }
        
        if (!pause) {
            game.drawMatrix(blockImages);
            piece.drawPiece(game.boardContext);
            // console.log(pause)

            let flag = piece.downPiece(game.matrix);
            
            // Se a peça ainda puder descer entra no loop de novo
            if(flag) {
                loop(nextPiece);
            }
            else {
                game.checkLine();
                game.increaseLevel();
                piece = new Piece(nextPiece.getType(), blockImages);
                
                let type = game.defineNext();
                nextPiece = new Piece(type, blockImages, 60);
                
                game.clearNextBoard();
                nextPiece.drawPiece(game.nextBoardContext);
                loop(nextPiece);
            }
        } 
        else {
            loop(nextPiece);
        }
    } , 1000 - 100*game.level);
}


// Função que monta o jogo e inicializa as classes utilizadas
async function buildGame() { 
    game = new Game();
    game.clearBoard()
    game.clearNextBoard()

    // Delay para carregar as imagens
    await new Promise(r => setTimeout(r, 1000));
    let type = game.defineNext();
    piece = new Piece(type, blockImages);
    nextPiece = new Piece(type, blockImages, 60);
    nextPiece.drawPiece(game.nextBoardContext);
}


// Função que adiciona os eventos e inicia o jogo
function runGame(){
    document.addEventListener("keydown", keyEvents);

    let type = game.defineNext();
    game.clearNextBoard()
    nextPiece = new Piece(type, blockImages, 60);
    nextPiece.drawPiece(game.nextBoardContext);

    loop(nextPiece);
}


buildGame();
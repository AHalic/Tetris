import { Piece } from "./piece.js";
import { Game } from "./game.js";
// import { loadImgs } from "./loadImgs.js";

function loadImgs() {
    (new Image()).src = "imgs/blocks/greenBlock.png";
    (new Image()).src = "imgs/blocks/redBlock.png";
    (new Image()).src = "imgs/blocks/blueBlock.png";
    (new Image()).src = "imgs/blocks/purpleBlock.png";
    (new Image()).src = "imgs/blocks/yellowBlock.png";
    (new Image()).src = "imgs/blocks/orangeBlock.png";
    (new Image()).src = "imgs/blocks/magentaBlock.png";
}

// loadImgs();
  
let pause = false;
let piece, nextPiece;
let game; // = new Game();

// Inicia o jogo (só acontece uma vez)
document.addEventListener("keydown", async function start(event) {
    const SPACE_KEY = 32;
    const keyPressed = event.keyCode;
    if (keyPressed == SPACE_KEY) {
        // loadImgs();
        
        // Some menu
        document.getElementsByClassName("menu")[0].style.display = "none";
        // Aparece jogo
        document.getElementsByClassName("grid-container")[0].style.display = "inline";

        // Load game
        //game = new Game();
        game.themeMusic.play();
        document.removeEventListener("keydown", start);
        
        
        // Delay
        await new Promise(r => setTimeout(r, 1500));
        runGame();
    }
});


// Eventos de pausar o jogo
document.getElementById('pause_button').addEventListener('click', function () {
    pause = true
    document.removeEventListener("keydown", keyEvents);
})

document.getElementById('options_button').addEventListener('click', function () {
    pause = true;
    document.removeEventListener("keydown", keyEvents);
})

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
function restartGame() {
    // Show game over popup
    let image = document.getElementsByClassName("End")[0];
    image.style.display = "block";
    document.getElementById("game").style.opacity = "0.2";
    // image.style.opacity = "0.8";

    // console.log("Show block");

    document.addEventListener("keydown", async function restart(event) {
        const SPACE_KEY = 32;
        const keyPressed = event.keyCode;
        if (keyPressed === SPACE_KEY) {
            image.style.display = "none"; // Hide game over modal
            document.getElementById("game").style.opacity = "1";
            game.themeMusic.pause();
            buildGame();

            // game = new Game();
            game.themeMusic.play();
            document.removeEventListener("keydown", restart);

            await new Promise(r => setTimeout(r, 1500));
            runGame();
        }
    });
}

function keyEvents(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    const SHIFT_KEY = 16;
    const keyPressed = event.keyCode;

    if (keyPressed == DOWN_KEY) {
        // console.log("Evento entrou");
        piece.downPiece(game.matrix);
        game.drawMatrix();
        piece.drawPiece(game.boardContext);
    }
    else if (keyPressed == UP_KEY) {
        piece.rotate(game.matrix);
        game.drawMatrix();
        piece.drawPiece(game.boardContext);
    }
    else if (keyPressed == LEFT_KEY) {
        piece.leftPiece(game.matrix);
        game.drawMatrix();
        piece.drawPiece(game.boardContext);
    }
    else if (keyPressed == RIGHT_KEY) {
        piece.rightPiece(game.matrix);
        game.drawMatrix();
        piece.drawPiece(game.boardContext);
    }
    else if (keyPressed == SHIFT_KEY) {
        while (piece.downPiece(game.matrix));
        game.drawMatrix();
        piece.drawPiece(game.boardContext);
    }
}


function loop(nextPiece){
    // alert("veio");
    setTimeout( function onTick() {
        if (game.over()){
            restartGame();
            return;
        }
        
        if (!pause) {
            game.drawMatrix();
            piece.drawPiece(game.boardContext);
            // console.log(pause)

            let flag = piece.downPiece(game.matrix);
            
            if(flag) {
                loop(nextPiece);
            }
            else {
                game.checkLine();
                piece = new Piece(nextPiece.getType());
                
                //let type = Math.round(Math.random() * (7 - 1) +1);
                let type = game.defineNext();
                nextPiece = new Piece(type, 60);
                
                game.clearNextBoard();
                nextPiece.drawPiece(game.nextBoardContext);
                loop(nextPiece);
            }
        } 
        else {
            loop(nextPiece);
        }
    } , 800 - 100 * (Math.floor(game.score/20)));
}



function buildGame() {
    game = new Game();
    game.clearBoard()
    game.clearNextBoard()

    //let type = Math.round(Math.random() * (7 - 1) +1);
    let type = game.defineNext();
    piece = new Piece(type);
    nextPiece = new Piece(type, 60);
    nextPiece.drawPiece(game.nextBoardContext);
}

function runGame(){
    document.addEventListener("keydown", keyEvents);
    // alert("oie");

    //let type = Math.round(Math.random() * (7 - 1) +1);
    let type = game.defineNext();
    game.clearNextBoard()
    nextPiece = new Piece(type, 60);
    nextPiece.drawPiece(game.nextBoardContext);

    // restartGame();
    loop(nextPiece);
}

buildGame();
// runGame();
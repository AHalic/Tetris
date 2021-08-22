import { Piece } from "./piece.js";
import { Game } from "./game.js";

function sleep2(milliseconds) {
    const date = Date.now();
    let currentDate = null;
 
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
  
let pause = true;
let piece, nextPiece;
let game = new Game();

document.addEventListener("keydown", function start(event) {
    const SPACE_KEY = 32;
    const keyPressed = event.keyCode;
    if (keyPressed == SPACE_KEY) {
        game.themeMusic.play();
        document.removeEventListener("keydown", start);
        runGame();
    }
});

function keyEvents(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    const SPACE_KEY = 32;
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
    // else if (keyPressed == SPACE_KEY) {
    //     pause = !pause;
    //     if (!pause) {
    //         loop()
    //     }
    // }
}


function loop(nextPiece){
    // alert("veio");
    setTimeout( function onTick() {
        if (game.over()){
            alert("Fim");
            return;
        }

        game.drawMatrix();
        piece.drawPiece(game.boardContext);

        let flag = piece.downPiece(game.matrix);
        
        if(flag){
            loop(nextPiece);
        }
        else{
            game.checkLine();
            piece = new Piece(nextPiece.getType());
            
            let type = Math.round(Math.random() * (7 - 1) +1);
            nextPiece = new Piece(type, 60);
            
            game.clearNextBoard();
            nextPiece.drawPiece(game.nextBoardContext);
            loop(nextPiece);
        }
 
    } , 800);
}

// console.log("Printando matrix:");

function buildGame() {
    game.clearBoard()
    game.clearNextBoard()
    
    let type = Math.round(Math.random() * (7 - 1) +1);
    piece = new Piece(type);
    nextPiece = new Piece(type, 60);
    nextPiece.drawPiece(game.nextBoardContext);
    // alert("cade");
}

function runGame(){
    document.addEventListener("keydown", keyEvents);
    
    // alert("oie");

    let type = Math.round(Math.random() * (7 - 1) +1);
    game.clearNextBoard()
    nextPiece = new Piece(type, 60);
    nextPiece.drawPiece(game.nextBoardContext);

    loop(nextPiece);
}

buildGame();
// runGame();
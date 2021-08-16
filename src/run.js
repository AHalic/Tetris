import { Piece } from "./piece.js";
import { Game } from "./game.js";

function sleep2(milliseconds) {
    const date = Date.now();
    let currentDate = null;
 
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
  

let piece;
let game = new Game();

function keyEvents(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
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
}


function loop(nextPiece){
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
            piece = new Piece(nextPiece.getType());
            
            let type = Math.round(Math.random() * (7 - 1) +1);
            nextPiece = new Piece(type, 60);
            
            game.clearNextBoard();
            nextPiece.drawPiece(game.nextBoardContext);
            loop(nextPiece);
        }
 
    } , 1000);
}

console.log("Printando matrix:");

function runGame(){
    document.addEventListener("keydown", keyEvents);
    game.clearBoard()
    game.clearNextBoard()
    
    let type = Math.round(Math.random() * (7 - 1) +1);
    let nextPiece = new Piece(type, 60);
    nextPiece.drawPiece(game.nextBoardContext);
    piece = new Piece(type);
    
    type = Math.round(Math.random() * (7 - 1) +1);
    game.clearNextBoard()
    nextPiece = new Piece(type, 60);
    nextPiece.drawPiece(game.nextBoardContext);

    loop(nextPiece);
}

runGame();
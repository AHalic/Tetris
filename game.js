// import Block from './block.js';
// import { Format1, Format2, Format3, Format4, Format5, Format6, Format7} from './format.js';
import { Piece } from "./piece.js";

class Game {
    constructor(){
        document.body.style.background = "lightcyan";
        
        this.board = document.getElementById("tetrisboard");
        this.boardContext = this.board.getContext ("2d");

        this.matrix = new Array(10)

        this.matrix.forEach(
            i => {
                for(j = 0; j < 18; j++)
                    this.matriz[i].append(0)
            }
        )
    }

    clearBoard(){
        this.boardContext.fillStyle = "white";
        this.boardContext.strokeStyle = "black";
        this.boardContext.fillRect(0, 0, this.board.width, this.board.height);
        this.boardContext.strokeRect(0, 0, this.board.width, this.board.height);
        // this.boardContext.strokeLine(150, 0, 150, this.board.height)
        this.boardContext.beginPath();
        this.boardContext.moveTo(150, 0);
        this.boardContext.lineTo(150, this.board.height);
        this.boardContext.stroke();
    }
}


let game = new Game();
game.clearBoard()

let piece = new Piece(6);
piece.drawPiece(game.boardContext);

// let format1 = new Format1();
// format1.drawPiece(game.boardContext);

// let format2 = new Format2();
// format2.drawPiece(game.boardContext);

// let format3 = new Format3();
// format3.drawPiece(game.boardContext);

// let format4 = new Format4();
// format4.drawPiece(game.boardContext);

// let format5 = new Format5();
// format5.drawPiece(game.boardContext);

// let format6 = new Format6();
// format6.drawPiece(game.boardContext);

// let format7 = new Format7();
// format7.drawPiece(game.boardContext);

// let block = new Block("yellow", 150, 200);
// block.drawBlock(game.boardContext);
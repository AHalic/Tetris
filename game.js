// import Block from './block.js';
// import { Format1, Format2, Format3, Format4, Format5, Format6, Format7} from './format.js';
import { Piece } from "./piece.js";

class Game {
    constructor(){
        document.body.style.background = "#101417FF";
        
        // Canvas onde aparece o jogo
        this.board = document.getElementById("tetrisboard");
        this.boardContext = this.board.getContext ("2d");

        // Canva onde aparece a próxima peça que entrará no jogo
        this.nextBoard = document.getElementById("nextpiece");
        this.nextBoardContext = this.nextBoard.getContext ("2d");


        // Matriz referente as posições do tetris
        this.matrix = new Array(10)

        this.matrix.forEach(
            i => {
                for(j = 0; j < 18; j++)
                    this.matriz[i].append(0)
            }
        )
    }

    clearBoard(){
        this.boardContext.fillStyle = "#1a1c21";
        this.boardContext.strokeStyle = "DimGray";
        this.boardContext.lineWidth = 10;
        this.boardContext.fillRect(0, 0, this.board.width, this.board.height);
        this.boardContext.strokeRect(0, 0, this.board.width, this.board.height);
        this.boardContext.strokeStyle = "black";
        this.boardContext.lineWidth = 2;

        this.boardContext.beginPath();
        this.boardContext.moveTo(150, 0);
        this.boardContext.lineTo(150, this.board.height);
        this.boardContext.stroke();
    }

    clearNextBoard() {
        this.nextBoardContext.fillStyle = "#1a1c21";
        this.nextBoardContext.lineWidth = 10;
        this.nextBoardContext.strokeStyle = "DimGray";
        this.nextBoardContext.fillRect(0, 0, this.nextBoard.width, this.nextBoard.height);
        this.nextBoardContext.strokeRect(0, 0, this.nextBoard.width, this.nextBoard.height);
        this.nextBoardContext.strokeStyle = "black";
        this.nextBoardContext.lineWidth = 2;
    }
}

let game = new Game();
game.clearBoard()
game.clearNextBoard()

let type = Math.round(Math.random() * (7 - 1) +1);

let nextpiece = new Piece(5, 60);
let piece = new Piece(2);
piece.drawPiece(game.boardContext);
nextpiece.drawPiece(game.nextBoardContext);

let i = 0;
function loop(){
    setTimeout( function onTick() {
        let flag = piece.downPiece(game.boardContext);
        game.clearBoard();
        // console.log("%c Estou printando ", 'background: #222; color: #bada55')
        //draw.board() usando a matriz
        piece.drawPiece(game.boardContext);
        //piece.rotate();
        // if (i++ == 5) exit();
        if(flag)
            // console.log("E lá vamos nós"); 
            loop();
 
    } , 1000);
}

loop()

function runGame(){
    //checa se acabou o jogo

    // chega se completou linha

    // cria peça

    //chama o loop de descer a peça
}
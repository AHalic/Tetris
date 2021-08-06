import Block from './block.js';

class Game {
    constructor(){
        document.body.style.background = "lightcyan";
        
        this.board = document.getElementById("tetrisboard");
        this.boardContext = board.getContext ("2d");

        this.matrix = new Array(10)

        this.matrix.forEach(
            i => {
                for(j = 0; j<18; j++)
                    this.matriz[i].append(0)
            }
        )
    }

    clearBoard(){
        this.boardContext.fillStyle = "white";
        this.boardContext.strokeStyle = "black";
        this.boardContext.fillRect(0, 0, this.board.width, this.board.height);
        this.boardContext.strokeRect(0, 0, this.board.width, this.board.height);
    }
}


let game = new Game();
game.clearBoard()
let block = new Block("yellow", 150, 200);
block.drawBlock();
// import Block from './block.js';
// import { Format1, Format2, Format3, Format4, Format5, Format6, Format7} from './format.js';
// import { Piece } from "./piece.js";

export class Game {
    constructor(){
        document.body.style.background = "#101417FF";

        // Canvas onde aparece o jogo
        this.board = document.getElementById("tetrisboard");
        this.boardContext = this.board.getContext ("2d");

        // Canva onde aparece a próxima peça que entrará no jogo
        this.nextBoard = document.getElementById("nextpiece");
        this.nextBoardContext = this.nextBoard.getContext ("2d");

        this.score = 0;
        this.lines = 0;
        document.getElementById("score").innerHTML = this.score;
        document.getElementById("lines").innerHTML = this.lines;

        this.audioLine = new Audio("audios/mixkit-player-jumping-in-a-video-game-2043.wav");
        this.audioLine.load();


        // console.log(this.audioLine.canPlayType("audio/wav"))
        // this.audioLine.play();

        // document.getElementById("lineAudio");
        // this.audioLine.autoplay = true;
    
        // this.audioLine = 


        // Matriz referente as posições do tetris
        // Matriz de comprimento 18x10
        this.matrix = Array(18);

        for(let i=0; i<this.matrix.length; i++){
            this.matrix[i] = Array(10).fill(0);
        }
        
    }


    clearBoard(){
        this.boardContext.fillStyle = "#1a1c21";
        this.boardContext.strokeStyle = "DimGray";
        this.boardContext.lineWidth = 10;
        this.boardContext.fillRect(0, 0, this.board.width, this.board.height);
        this.boardContext.strokeRect(0, 0, this.board.width, this.board.height);
        this.boardContext.strokeStyle = "black";
        this.boardContext.lineWidth = 2;

        // this.boardContext.beginPath();
        // this.boardContext.moveTo(150, 0);
        // this.boardContext.lineTo(150, this.board.height);
        // this.boardContext.stroke();
    }

    clearNextBoard(){
        this.nextBoardContext.fillStyle = "#101417FF";
        this.nextBoardContext.lineWidth = 10;
        this.nextBoardContext.strokeStyle = "DimGray";
        this.nextBoardContext.fillRect(0, 0, this.nextBoard.width, this.nextBoard.height);
        this.nextBoardContext.strokeRect(0, 0, this.nextBoard.width, this.nextBoard.height);
        this.nextBoardContext.strokeStyle = "black";
        this.nextBoardContext.lineWidth = 2;
    }

    drawMatrix(){

        this.clearBoard();

        let x, y, color;

        for(let i=0; i<this.matrix.length; i++){
            for(let j=0; j<10; j++){
                if(this.matrix[i][j] == 0)
                    continue;
                    
                switch(this.matrix[i][j]){
                    case(1):
                        color = 'purple';
                        break;
                    case(2):
                        color = 'green';
                        break;
                    case(3):
                        color = 'orange';
                        break;
                    case(4):
                        color = 'blue';
                        break;
                    case(5):
                        color = 'yellow';
                        break;
                    case(6):
                        color = 'brown';
                        break;
                    case(7):
                        color = 'magenta';
                        break;
                }

                x = j*30;
                y = i*30;

                this.boardContext.fillStyle = color;
                this.boardContext.strokestyle = 'black';
                this.boardContext.fillRect(x , y , 30, 30);
                this.boardContext.strokeRect(x , y , 30, 30);
            }
        }
    }

    downMatrix(i){
        if (i == 0) {
            for(let j = 0; j < 10; j++){
                this.matrix[i][j] = 0;
            }
        }
        else {
            for(let old = i; old > 0; old--){
                let newLine = old - 1;
                
                let cont = 0;
                for(let j = 0; j < 10; j++){
                    // console.log("novo " + newLine + " antes " + old + " e o j " + j);
                    this.matrix[old][j] = this.matrix[newLine][j];
                    if(this.matrix[newLine][j] == 0)
                        cont++;
                }   
                if (cont == this.matrix[newLine].length) {
                    break;
                }

            }
        }
    }

    checkLine(){
        let score = 0;
        let qtd = 0;

        for (let i = this.matrix.length - 1; i >= 0; i--) {
            let cont = 0;
            
            for(let j = 0; j < 10; j++) {
                if (this.matrix[i][j] != 0) {
                    cont++;
                }
            }
            
            // console.log(cont);
            // Se a linha está toda vazia então não precisa verificar mais
            if (cont == 0) {
                break;
            }
            // Se a linha está toda preenchida entao desce
            if (cont == 10) {
                document.getElementById("lines").innerHTML = ++this.lines;
                this.downMatrix(i);

                qtd++;
                score += qtd*10;
                // console.log(score);
                i++;
            }
            
            // i++;
        }
        if (score != 0) {
            this.score += score;
            document.getElementById("score").innerHTML = this.score;
            // this.audioLine.src = "audios/mixkit-game-ball-tap-2073.mp3";
            this.audioLine.play();
            // this.audioLine.autoplay = true;
        }
    }

    over(){
        for(let elem of this.matrix[0]){
            if(elem != 0) {
                return true;
            }
        }

        return false;
    }
}

// export default Game;
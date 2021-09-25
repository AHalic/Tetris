import Block from "./block.js";

export class Game {
    constructor(){
        // this.loadImgs();
        document.body.style.background = "#101417FF";

        // Canvas onde aparece o jogo
        this.board = document.getElementById("tetrisboard");
        this.boardContext = this.board.getContext ("2d");

        // Canva onde aparece a próxima peça que entrará no jogo
        this.nextBoard = document.getElementById("nextpiece");
        this.nextBoardContext = this.nextBoard.getContext ("2d");

        this.level = 1;
        this.score = 0;
        this.lines = 0;

        let sound = true;

        document.getElementById("score").innerHTML = this.score;
        document.getElementById("lines").innerHTML = this.lines;

        this.audioLoad();
        let music = this.themeMusic;
        let lineSound = this.lineSound;
        
        document.getElementById("soundButton").addEventListener("click", function mute() {
            if (sound) {
                music.muted = true;
                lineSound.muted = true;
                document.getElementsByClassName("sound-image")[0].src = "imgs/mute.png";
                document.getElementsByClassName("sound-image")[0].style = "height: 63px; width: 63px"
            }
            
            else {
                music.muted = false;
                lineSound.muted = false;
                document.getElementsByClassName("sound-image")[0].src = "imgs/sound.png";
                document.getElementsByClassName("sound-image")[0].style = "height: 52px; width: 52px"
            }
            sound = !sound

        });
        

        // Matriz referente as posições do tetris
        // Matriz de comprimento 18x10
        this.matrix = Array(18);

        for(let i=0; i<this.matrix.length; i++){
            this.matrix[i] = Array(10).fill(0);
        }
        
        this.nextOptions = [1, 2, 3, 4, 5, 6, 7];
    }

    defineNext(){
        if (this.nextOptions.length == 0)
            this.nextOptions = [1, 2, 3, 4, 5, 6, 7];
    
        // console.log(this.nextOptions);
        let index = Math.round(Math.random() * (this.nextOptions.length - 1) + 1) - 1;
        let newPiece = this.nextOptions.splice(index,1);
        // console.log('peça: ' + newPiece);
        return Number(newPiece);
    }

    clearBoard(){
        this.boardContext.fillStyle = "#1a1c21";
        this.boardContext.fillRect(0, 0, this.board.width, this.board.height);
        this.boardContext.strokeRect(0, 0, this.board.width, this.board.height);
    }

    clearNextBoard(){
        this.nextBoardContext.fillStyle = "#141313";
        this.nextBoardContext.lineWidth = 10;
        this.nextBoardContext.strokeStyle = "DimGray";
        this.nextBoardContext.fillRect(0, 0, this.nextBoard.width, this.nextBoard.height);
        this.nextBoardContext.strokeRect(0, 0, this.nextBoard.width, this.nextBoard.height);
        this.nextBoardContext.strokeStyle = "black";
        this.nextBoardContext.lineWidth = 2;
    }

    drawMatrix(blockImages){
        this.clearBoard();
        let x, y, color;

        for(let i=0; i<this.matrix.length; i++){
            for(let j=0; j<10; j++){
                if(this.matrix[i][j] == 0)
                    continue;

                switch(this.matrix[i][j]){
                    case(1):
                        color = '#6A31D1'; // purple
                        break;
                    case(2):
                        color = '#73BC38'; // green
                        break;
                    case(3):
                        color = '#FFA704'; // orange
                        break;
                    case(4):
                        color = '#07ACD5'; // blue
                        break;
                    case(5):
                        color = '#FFE02C'; // yellow
                        break;
                    case(6):
                        color = '#E92F3A'; // red
                        break;
                    case(7):
                        color = '#E75FAD'; // magenta
                        break;
                }

                x = j*30;
                y = i*30;

                
                // let blockImg = new Image();
                // blockImg.src = Block.defineColorBlock(color);
                let blockImg = blockImages.whichImage(color);
                this.boardContext.drawImage(blockImg, x, y, 30, 30);

                this.boardContext.lineWidth = 3;
                this.boardContext.strokeStyle = '#17181B';
                this.boardContext.lineCap = 'round';
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
            
            // Se a linha está toda vazia então não precisa verificar mais
            if (cont == 0) {
                break;
            }
            // Se a linha está toda preenchida entao desce
            if (cont == 10) {
                document.getElementById("lines").innerHTML = ++this.lines;
                qtd++;
                this.downMatrix(i);
                if (qtd == 1) {
                    this.lineSound.play();
                }

                score += qtd*10;
                i++;
            }
            
        }
        if (score != 0) {
            this.score += score;
            document.getElementById("score").innerHTML = this.score;
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

    audioLoad() {
        this.lineSound = new Audio("audios/mixkit-player-jumping-in-a-video-game-2043.mp3");
        this.themeMusic = new Audio("audios/themeSong.mp3");
        this.lineSound.load();
        this.themeMusic.load();
        this.themeMusic.loop = true;
        this.lineSound.volume = 0.1;
        this.themeMusic.volume = 0.025;
    }

    increaseLevel() {
        if (this.score < 100) {
            this.level = 0;
        }
        else if (this.score < 300) {
            this.level = 1;
        }
        else if (this.score < 500) {
            this.level = 2; 
        }
        else if (this.score < 800) {
            this.level = 3;
        }
        else if (this.score < 1100) {
            this.level = 4;
        }
        else if (this.score < 1400) {
            this.level = 5;
        }
        else if (this.score < 1700) {
            this.level = 6;
        }
        else if (this.score < 2000) {
            this.level = 7;
        }
        else {
            this.level = 8;
        }
    }
}

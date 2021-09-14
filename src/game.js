import Block from "./block.js";

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

        let sound = true;

        document.getElementById("score").innerHTML = this.score;
        document.getElementById("lines").innerHTML = this.lines;

        this.audioLoad();
        let music = this.themeMusic;
        let lineSound = this.lineSound;
        // this.muteGameEvent();
        
        document.getElementById("soundButton").addEventListener("click", function mute() {
            if (sound) {
                console.log("no prim");
                music.muted = true;
                lineSound.muted = true;
                document.getElementsByClassName("sound-image")[0].src = "imgs/mute.png";
                document.getElementsByClassName("sound-image")[0].style = "height: 63px; width: 63px"
            }
            
            else {
                console.log("no seg");
                music.muted = false;
                lineSound.muted = false;
                document.getElementsByClassName("sound-image")[0].src = "imgs/sound.png";
                document.getElementsByClassName("sound-image")[0].style = "height: 52px; width: 52px"
            }
            sound = !sound
            // document.getElementById("soundButton").removeEventListener("click", unmute);
            // // Game.muteGameEvent(music, lineSound);
            // document.getElementById("soundButton").addEventListener("click", mute(music, lineSound));
            
            // document.getElementById("soundButton").addEventListener("click", function unmute() {
            // });
        });
        

        // Matriz referente as posições do tetris
        // Matriz de comprimento 18x10
        this.matrix = Array(18);

        for(let i=0; i<this.matrix.length; i++){
            this.matrix[i] = Array(10).fill(0);
        }
        
    }


    clearBoard(){
        this.boardContext.fillStyle = "#1a1c21";
        this.boardContext.fillRect(0, 0, this.board.width, this.board.height);
        this.boardContext.strokeRect(0, 0, this.board.width, this.board.height);
    }

    clearNextBoard(){
        // this.nextBoardContext.fillStyle = "#101417FF";
        this.nextBoardContext.fillStyle = "#141313";
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
                        // color = '#372780'; // purple
                        color = '#6A31D1'; // purple
                        break;
                    case(2):
                        // color = '#4f8d23'; // green
                        color = '#73BC38'; // green
                        break;
                    case(3):
                        // color = '#e05d1a'; // orange
                        color = '#FFA704'; // orange
                        break;
                    case(4):
                        // color = '#2c5499'; // blue
                        color = '#07ACD5'; // blue
                        break;
                    case(5):
                        // color = '#e8c917'; // yellow
                        color = '#FFE02C'; // yellow
                        break;
                    case(6):
                        // color = '#b9231f'; // red
                        color = '#E92F3A'; // red
                        break;
                    case(7):
                        // color = '#ed4974'; // magenta
                        color = '#E75FAD'; // magenta
                        break;
                }

                x = j*30;
                y = i*30;


                let blockImg = new Image();
                blockImg.src = Block.defineColorBlock(color);
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
                qtd++;
                this.downMatrix(i);
                if (qtd == 1) {
                    this.lineSound.play();
                }

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

    muteGameEvent() {
        // document.getElementById("soundButton").addEventListener("click", function mute(event) {
        //     this.themeMusic.pause();
        //     this.lineSound.pause();
        //     document.getElementById("soundButton").src = "imgs/mute.png";
        //     document.getElementById("soundButton").removeEventListener("click", mute());
        //     this.unmuteGameEvent();
        // });
        document.getElementById("soundButton").onclick()
    }
    unmuteGameEvent(music, lineSound) {
        document.getElementById("soundButton").addEventListener("click", function unmute() {
            music.play();
            lineSound.play();
            document.getElementById("soundButton").src = "imgs/4f7b7fff8862568.png";
            document.getElementById("soundButton").removeEventListener("click", unmute);
            // Game.muteGameEvent(music, lineSound);
            document.getElementById("soundButton").addEventListener("click", mute(music, lineSound));
        });
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
}


// export default Game;
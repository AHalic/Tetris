// Classe representando o jogo
export class Game {
    /**
     * Cria o jogo
     */
    constructor(){
        document.body.style.background = "#101417FF";

        // Canvas onde aparece o jogo
        this.board = document.getElementById("tetrisboard");
        this.boardContext = this.board.getContext ("2d");

        // Canva onde aparece a próxima peça que entrará no jogo
        this.nextBoard = document.getElementById("nextpiece");
        this.nextBoardContext = this.nextBoard.getContext ("2d");

        // Propriedades do jogo
        this.level = 1;
        this.score = 0;
        this.lines = 0;

        let sound = true;

        document.getElementById("score").innerHTML = this.score;
        document.getElementById("lines").innerHTML = this.lines;

        this.audioLoad();
        let music = this.themeMusic;
        let lineSound = this.lineSound;
        let endSound = this.endAudio;
        
        // Evento de musica do jogo
        document.getElementById("soundButton").addEventListener("click", function mute() {
            if (sound) {
                music.muted = true;
                lineSound.muted = true;
                endSound.muted = true;
                document.getElementsByClassName("sound-image")[0].src = "imgs/mute.png";
                document.getElementsByClassName("sound-image")[0].style = "height: 63px; width: 63px"
            }
            
            else {
                music.muted = false;
                lineSound.muted = false;
                endSound.muted = false;
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
        
        // "bolsa" de opções de peças a serem sorteadas
        this.nextOptions = [1, 2, 3, 4, 5, 6, 7];
    }

    /**
     * Sorteia uma peça para ser criada no jogo
     * @returns {number} número referente ao formato da peça
     */
    defineNext(){
        if (this.nextOptions.length == 0)
            this.nextOptions = [1, 2, 3, 4, 5, 6, 7];
    
        let index = Math.round(Math.random() * (this.nextOptions.length - 1) + 1) - 1;
        let newPiece = this.nextOptions.splice(index,1);

        return Number(newPiece);
    }

    /**
     * Limpa o canva do jogo
     */
    clearBoard(){
        this.boardContext.fillStyle = "#1a1c21";
        this.boardContext.fillRect(0, 0, this.board.width, this.board.height);
        this.boardContext.strokeRect(0, 0, this.board.width, this.board.height);
    }

    /**
     * Limpa o canva da próxima peça a entrar no jogo
     */
    clearNextBoard(){
        this.nextBoardContext.fillStyle = "#141313";
        this.nextBoardContext.lineWidth = 10;
        this.nextBoardContext.strokeStyle = "DimGray";
        this.nextBoardContext.fillRect(0, 0, this.nextBoard.width, this.nextBoard.height);
        this.nextBoardContext.strokeRect(0, 0, this.nextBoard.width, this.nextBoard.height);
        this.nextBoardContext.strokeStyle = "black";
        this.nextBoardContext.lineWidth = 2;
    }

    /**
     * Método que desenha as peças contidas na matriz no canva do jogo
     * @param {BlockImages} blockImages classe contendo as imagens dos blocos
     */
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

                let blockImg = blockImages.whichImage(color);
                this.boardContext.drawImage(blockImg, x, y, 30, 30);

                this.boardContext.lineWidth = 3;
                this.boardContext.strokeStyle = '#17181B';
                this.boardContext.lineCap = 'round';
                this.boardContext.strokeRect(x , y , 30, 30);
            }
        }
    }

    /**
     * Ao remover uma linha a "matriz desce"
     * @param {int} i linha removida
     */
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

    /**
     * Verifica as linhas da matriz e se alguma já foi preenchida
     */
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

    /**
     * Verifica se a primeira linha da matriz possui peça
     * @returns {bool} true se o jogo terminou, false se não
     */
    over(){
        for(let elem of this.matrix[0]){
            if(elem != 0) {
                return true;
            }
        }

        return false;
    }

    /**
     * Carrega os audios do jogo e modifica o volume
     */
    audioLoad() {
        this.lineSound = new Audio("audios/mixkit-player-jumping-in-a-video-game-2043.mp3");
        this.themeMusic = new Audio("audios/themeSong.mp3");
        this.endAudio = new Audio("audios/gameOver.mp3");
        this.lineSound.load();
        this.themeMusic.load();
        this.endAudio.load();
        this.themeMusic.loop = true;
        this.lineSound.volume = 0.1;
        this.endAudio.volume = 0.08;
        this.themeMusic.volume = 0.025;
    }

    /**
     * Modifica o level dependendo da pontuação no jogo
     */
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

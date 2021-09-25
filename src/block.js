
/**
 * Classe representação de um bloco de uma peça
 */
class Block {
    /**
     * Constrói o bloco
     * @param {string} color hexadecimal referente a cor da peça
     * @param {number} x posição no jogo
     * @param {number} y posição no jogo
     * @param {BlockImages} BlockImages classe contendo as imagens do bloco
     */
    constructor(color, x, y, BlockImages) {
        this.color = color;

        /* Para achar a posição na matriz basta dividir por 30 */
        this.x = x;
        this.y = y;

        this.blockImg = BlockImages.whichImage(color);
    }

    /**
     * Desenha o bloco
     * @param {*} boardContext board em que o bloco será desenhado
     */
    drawBlock(boardContext) {
        boardContext.drawImage(this.blockImg, this.x, this.y, 30, 30);

        boardContext.lineWidth = 3;
        boardContext.strokeStyle = '#17181B';
        boardContext.lineCap = 'round';
        boardContext.strokeRect(this.x , this.y , 30, 30);
    }

    /**
     * Desce o bloco no jogo
     */    
    down(){
        this.y += 30;
    }

    /**
     * Movimenta o bloco para a esquerda
     */
    left() {
        this.x -= 30;
    }
    
    /**
     * Movimenta o bloco para a direita
     */
    right() {
        this.x += 30;
    }
}

export default Block;
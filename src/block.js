class Block {
    constructor(color, x, y) {
        this.color = color;
        // posições no canva
        this.x = x;
        this.y = y;
        /* Para achar a posição na matriz basta dividir por 30 */
    }

    drawBlock(boardContext) {
        boardContext.fillStyle = this.color;
        boardContext.lineWidth = 3;
        boardContext.strokeStyle = '#17181B';
        boardContext.lineCap = 'round';

        boardContext.fillRect(this.x , this.y , 30, 30);
        boardContext.strokeRect(this.x , this.y , 30, 30);

    }

    down(){
        this.y += 30;
    }

    left() {
        this.x -= 30;
    }
    
    right() {
        this.x += 30;
    }

}

export default Block;
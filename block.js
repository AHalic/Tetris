class Block {
    constructor(color, x, y) {
        this.color = color;
        // posições no canva
        this.x = x;
        this.y = y;

        // posições na matriz
        this.i = x/30;
        this.j = y/30;
    }

    drawBlock(boardContext) {
        boardContext.fillStyle = this.color;
        boardContext.strokestyle = 'black';
        boardContext.fillRect(this.x , this.y , 30, 30);
        boardContext.strokeRect(this.x , this.y , 30, 30);
    }

    down(){
        this.y += 30;
        this.j += 1;
    }

}

export default Block;
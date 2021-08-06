class Block {
    constructor(color, x, y) {
        this.color = color;
        this.x = x;
        this.y = y;
        
        
    }
    
    drawBlock(boardContext) {
        boardContext.fillStyle = this.color;
        boardContext.strokestyle = 'black';
        boardContext.fillRect(this.x , this.y , 30, 30);
        boardContext.strokeRect(this.x , this.y , 30, 30);
    }
}


export default Block;
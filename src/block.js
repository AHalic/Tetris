class Block {
    constructor(color, x, y, BlockImages) {
        this.color = color;
        // posições no canva
        this.x = x;
        this.y = y;
        this.blockImg = BlockImages.whichImage(color);
        /* Para achar a posição na matriz basta dividir por 30 */
    }

    static whichColor(hexColor){
        let str_color = undefined;
        switch (hexColor) {
            case '#6A31D1': str_color = 'purple';
                break;
            case '#73BC38': str_color = 'green';
                break;
            case '#FFA704': str_color = 'orange';
                break;
            case '#07ACD5': str_color = 'blue';
                break;
            case '#FFE02C': str_color = 'yellow';
                break;
            case '#E92F3A': str_color = 'red';
                break;
            case '#E75FAD': str_color = 'magenta';
                break;
        }
        if (str_color === undefined){
            console.log("Something went wrong, color is undefined");
        }
        return str_color;
    }

    static defineColorBlock(hexColor){
        let source = "imgs/blocks/";
        source += Block.whichColor(hexColor) + "Block.png";
        return source;
    }

    drawBlock(boardContext) {
        // let blockImg = new Image();
        // blockImg.src = Block.defineColorBlock(this.color);
        boardContext.drawImage(this.blockImg, this.x, this.y, 30, 30);

        boardContext.lineWidth = 3;
        boardContext.strokeStyle = '#17181B';
        boardContext.lineCap = 'round';
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
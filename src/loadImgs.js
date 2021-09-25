export default class BlockImages {
    constructor() {
        this.green = new Image();
        this.green.src = "imgs/blocks/greenBlock.png";

        this.red = new Image();
        this.red.src = "imgs/blocks/redBlock.png";

        this.blue = new Image();
        this.blue.src = "imgs/blocks/blueBlock.png";

        this.purple = new Image();
        this.purple.src = "imgs/blocks/purpleBlock.png";

        this.yellow = new Image();
        this.yellow.src = "imgs/blocks/yellowBlock.png";

        this.orange = new Image();
        this.orange.src = "imgs/blocks/orangeBlock.png";

        this.magenta = new Image();
        this.magenta.src = "imgs/blocks/magentaBlock.png";
    }

    whichImage(hexColor){
        switch (hexColor) {
            case '#6A31D1': return this.purple;
                break;
            case '#73BC38': return this.green;
                break;
            case '#FFA704': return this.orange;
                break;
            case '#07ACD5': return this.blue;
                break;
            case '#FFE02C': return this.yellow;
                break;
            case '#E92F3A': return this.red;
                break;
            case '#E75FAD': return this.magenta;
                break;
        }
        // if (str_color === undefined){
        //     console.log("Something went wrong, color is undefined");
        // }
        // return str_color;
    }
}

// loadImgs();

// export default loadImgs;
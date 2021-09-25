/**
 * Classe contendo as imagens dos blocos
 */
export default class BlockImages {

    /**
     * Constrói a classe carregando cada imagem
     */
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

    /**
     * Escolhe qual imagem será usada
     * @param {string} hexColor hexadecimal referente a cor da peça
     * @returns {Image} imagem do blos
     */
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
    }
}
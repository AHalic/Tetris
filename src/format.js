import Block from './block.js';

/**
 * Classe representação do formato 1 (roxo)
 */
export class Format1{
    //   _   (aparencia da peça)
    //  ---  

    /**
     * Constrói o formato
     * @param {number} x posição no canva
     * @param {BlockImages} blockImages classe contendo as imagens dos blocos
     */
    constructor(x=0, blockImages){
        this.piece =  Array(new Block('#6A31D1', 90-x/2, x, blockImages), 
                            new Block('#6A31D1', 120-x/2, x, blockImages), 
                            new Block('#6A31D1', 120-x/2, x+30, blockImages), 
                            new Block('#6A31D1', 150-x/2, x, blockImages));
    }

    /**
     * Rotaciona o formato
     * @param {number} rotation tipo da rotação
     * @returns {Array} novas posições do formato
    */
    rotate(rotation){
        let newPosition;
        switch (rotation) {
            case 0:
                newPosition = Array(
                    [this.piece[0].x + 30, this.piece[0].y - 30],
                    [this.piece[1].x, this.piece[1].y],
                    [this.piece[2].x - 30, this.piece[2].y - 30],
                    [this.piece[3].x - 30, this.piece[3].y + 30]
                );
                break;
            case 1:
                newPosition = Array(
                    [this.piece[0].x + 30, this.piece[0].y + 30],
                    [this.piece[1].x, this.piece[1].y],
                    [this.piece[2].x + 30, this.piece[2].y - 30],
                    [this.piece[3].x - 30, this.piece[3].y - 30]
                );
                break;
            case 2:
                newPosition = Array(
                    [this.piece[0].x - 30, this.piece[0].y + 30],
                    [this.piece[1].x, this.piece[1].y],
                    [this.piece[2].x + 30, this.piece[2].y + 30],
                    [this.piece[3].x + 30, this.piece[3].y - 30]
                );
                break;
            case 3:
                newPosition = Array(
                    [this.piece[0].x - 30, this.piece[0].y - 30],
                    [this.piece[1].x, this.piece[1].y],
                    [this.piece[2].x - 30, this.piece[2].y + 30],
                    [this.piece[3].x + 30, this.piece[3].y + 30]
                );
                break;
            default:
                break;
        }

        return newPosition;
    }
}

/**
 * Classe representação do formato 2 (verde)
 */
export class Format2{
    // --__  (aparencia da peça)

    /**
     * Constrói o formato
     * @param {number} x posição no canva
     * @param {BlockImages} blockImages classe contendo as imagens dos blocos
     */
    constructor(x=0, blockImages){
        this.piece =  Array(new Block('#73BC38', 90-x/2, x, blockImages), 
                            new Block('#73BC38', 120-x/2, x, blockImages), 
                            new Block('#73BC38', 120-x/2, x+30, blockImages), 
                            new Block('#73BC38', 150-x/2, x+30, blockImages));
    }
    
    /**
     * Rotaciona o formato
     * @param {number} rotation tipo da rotação
     * @returns {Array} novas posições do formato
    */
    rotate(rotation){
        let newPosition;
        switch (rotation) {
            case 0:
            case 2:
                newPosition = Array(
                    [this.piece[0].x + 30, this.piece[0].y - 30],
                    [this.piece[1].x, this.piece[1].y],
                    [this.piece[2].x - 30, this.piece[2].y - 30],
                    [this.piece[3].x - 60, this.piece[3].y]
                )
                break;
            case 1:
            case 3:
                newPosition = Array(
                    [this.piece[0].x - 30, this.piece[0].y + 30],
                    [this.piece[1].x, this.piece[1].y],
                    [this.piece[2].x + 30, this.piece[2].y + 30],
                    [this.piece[3].x + 60, this.piece[3].y] 
                )
                break;
            default:
                break;
        }

        return newPosition;
    }
}   

/**
 * Classe representação do formato 3 (laranja)
 */
export class Format3{
    // ---- (aparencia da peça)

    /**
     * Constrói o formato
     * @param {number} x posição no canva
     * @param {BlockImages} blockImages classe contendo as imagens dos blocos
    */
    constructor(x=0, blockImages){
        this.piece =  Array(new Block('#FFA704', 90-x/2, x, blockImages), 
                            new Block('#FFA704', 120-x/2, x, blockImages), 
                            new Block('#FFA704', 150-x/2, x, blockImages), 
                            new Block('#FFA704', 180-x/2, x, blockImages));
    }
    
    /**
     * Rotaciona o formato
     * @param {number} rotation tipo da rotação
     * @returns {Array} novas posições do formato
    */    
    rotate(rotation){ 
        let newPosition;
        switch(rotation){
            case 0:
            case 2:
                newPosition = Array(
                    [this.piece[0].x + 30, this.piece[0].y - 30],
                    [this.piece[1].x, this.piece[1].y],
                    [this.piece[2].x - 30, this.piece[2].y + 30],
                    [this.piece[3].x - 60, this.piece[3].y + 60]
                )
                break;
            case 1:
            case 3:
                newPosition = Array(
                    [this.piece[0].x - 30, this.piece[0].y + 30],
                    [this.piece[1].x, this.piece[1].y],
                    [this.piece[2].x + 30, this.piece[2].y - 30],
                    [this.piece[3].x + 60, this.piece[3].y - 60]
                )
                break;
            default:
                break;
        }

        return newPosition;
    }
}

/**
 * Classe representação do formato 4 (azul)
 */
export class Format4{
    // _    (aparencia da peça)
    // ---  

    /**
     * Constrói o formato
     * @param {number} x posição no canva
     * @param {BlockImages} blockImages classe contendo as imagens dos blocos
    */    
    constructor(x=0, blockImages){
        this.piece =  Array(new Block('#07ACD5', 90-x/2, x, blockImages), 
                            new Block('#07ACD5', 90-x/2, x+30, blockImages), 
                            new Block('#07ACD5', 120-x/2, x, blockImages), 
                            new Block('#07ACD5', 150-x/2, x, blockImages));
    }

    /**
     * Rotaciona o formato
     * @param {number} rotation tipo da rotação
     * @returns {Array} novas posições do formato
    */
    rotate(rotation){
        let newPosition;
        switch (rotation) {
            case 0:
                newPosition = Array(
                [this.piece[0].x + 30, this.piece[0].y - 30],
                [this.piece[1].x, this.piece[1].y - 60],
                [this.piece[2].x, this.piece[2].y],
                [this.piece[3].x - 30, this.piece[3].y + 30]
                )
                break;
            case 1:
                newPosition = Array(
                [this.piece[0].x + 30, this.piece[0].y + 30],
                [this.piece[1].x + 60, this.piece[1].y],
                [this.piece[2].x, this.piece[2].y],
                [this.piece[3].x - 30, this.piece[3].y - 30]
                )
                break;
            case 2:
                newPosition = Array(
                [this.piece[0].x - 30, this.piece[0].y + 30],
                [this.piece[1].x, this.piece[1].y + 60],
                [this.piece[2].x, this.piece[2].y],
                [this.piece[3].x + 30, this.piece[3].y - 30]
                )
                break;
            case 3:
                newPosition = Array(
                [this.piece[0].x - 30, this.piece[0].y - 30],
                [this.piece[1].x - 60, this.piece[1].y],
                [this.piece[2].x, this.piece[2].y],
                [this.piece[3].x + 30, this.piece[3].y + 30]
                )
                break;
            default:
                break;
        }

        return newPosition;
    }
}

/**
 * Classe representação do formato 5 (amarelo)
 */
export class Format5{
    //   _   (aparencia da peça)
    // ---
    
    
    /**
     * Constrói o formato
     * @param {number} x posição no canva
     * @param {BlockImages} blockImages classe contendo as imagens dos blocos
    */   
    constructor(x=0, blockImages){
        this.piece =  Array(new Block('#FFE02C', 90-x/2, x, blockImages), 
                            new Block('#FFE02C', 120-x/2, x, blockImages), 
                            new Block('#FFE02C', 150-x/2, x, blockImages), 
                            new Block('#FFE02C', 150-x/2, x+30, blockImages));
    }

    /**
     * Rotaciona o formato
     * @param {number} rotation tipo da rotação
     * @returns {Array} novas posições do formato
    */
    rotate(rotation){
        let newPosition;
        switch (rotation) {
            case 0:
                newPosition = Array(
                    [this.piece[0].x +30, this.piece[0].y -30],
                    [this.piece[1].x, this.piece[1].y],
                    [this.piece[2].x - 30, this.piece[2].y + 30],
                    [this.piece[3].x-60, this.piece[3].y]
                    )
                break;
            case 1:
                newPosition = Array(
                    [this.piece[0].x + 30, this.piece[0].y +30],
                    [this.piece[1].x, this.piece[1].y],
                    [this.piece[2].x - 30, this.piece[2].y - 30],
                    [this.piece[3].x, this.piece[3].y - 60]
                    )
                break;
            case 2:
                newPosition = Array(
                    [this.piece[0].x - 30, this.piece[0].y + 30],
                    [this.piece[1].x, this.piece[1].y],
                    [this.piece[2].x + 30, this.piece[2].y - 30],
                    [this.piece[3].x + 60 , this.piece[3].y]
                )
                break;
            case 3:
                newPosition = Array(
                    [this.piece[0].x - 30, this.piece[0].y - 30],
                    [this.piece[1].x, this.piece[1].y],
                    [this.piece[2].x + 30, this.piece[2].y + 30],
                    [this.piece[3].x, this.piece[3].y + 60]
                    )
                break;
            default:
                break;
        }

        return newPosition;
    }
}

/**
 * Classe representação do formato 6 (veremelho)
 */
export class Format6{
    //  __--  (aparencida da peça)

    /**
     * Constrói o formato
     * @param {number} x posição no canva
     * @param {BlockImages} blockImages classe contendo as imagens dos blocos
    */ 
    constructor(x=0, blockImages){
        this.piece =  Array(new Block('#E92F3A', 90-x/2, x+30, blockImages), 
                            new Block('#E92F3A', 120-x/2, x+30, blockImages), 
                            new Block('#E92F3A', 120-x/2, x, blockImages), 
                            new Block('#E92F3A', 150-x/2, x, blockImages));
    }
    
    /**
     * Rotaciona o formato
     * @param {number} rotation tipo da rotação
     * @returns {Array} novas posições do formato
    */
    rotate(rotation){
        let newPosition;
        switch (rotation) {
            case 0:
            case 2:
                newPosition = Array(
                    [this.piece[0].x, this.piece[0].y - 60],
                    [this.piece[1].x - 30, this.piece[1].y - 30],
                    [this.piece[2].x, this.piece[2].y],
                    [this.piece[3].x - 30, this.piece[3].y + 30]
                )
                break;
            case 1:
            case 3:
                newPosition = Array(
                    [this.piece[0].x, this.piece[0].y + 60],
                    [this.piece[1].x + 30, this.piece[1].y + 30],
                    [this.piece[2].x, this.piece[2].y],
                    [this.piece[3].x + 30, this.piece[3].y - 30] 
                )
                break;
            default:
                break;
        }

        return newPosition;
    }
}

/**
 * Classe representação do formato 7 (rosa)
 */
export class Format7{
    // [] (aparencia da peça)

    /**
     * Constrói o formato
     * @param {number} x posição no canva
     * @param {BlockImages} blockImages classe contendo as imagens dos blocos
    */ 
    constructor(x=0, blockImages){
        this.piece =  Array(new Block('#E75FAD', 120-x/2, x, blockImages), 
                            new Block('#E75FAD', 120-x/2, x+30, blockImages), 
                            new Block('#E75FAD', 150-x/2, x, blockImages), 
                            new Block('#E75FAD', 150-x/2, x+30, blockImages));
    }

    /**
     * Rotaciona o formato
     * @param {number} rotation tipo da rotação
     * @returns {Array} novas posições do formato
    */
    rotate(){
        return Array(
            [this.piece[0].x, this.piece[0].y],
            [this.piece[1].x, this.piece[1].y],
            [this.piece[2].x, this.piece[2].y],
            [this.piece[3].x, this.piece[3].y]
        )
    }
}
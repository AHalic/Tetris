import { Format1, Format2, Format3, Format4, Format5, Format6, Format7} from './format.js';

/**
 * Classe referente a uma peça
 */
export class Piece {
    /**
     * Constrói a peça
     * @param {number} formatValue número referente ao formato da peça
     * @param {BlockImages} blockImages classe contendo as imagens dos blocos
     * @param {number} x posição no canva
     */
    constructor(formatValue, blockImages, x=0) {
        this.type = formatValue;
        this.rotation = 0;

        switch (formatValue) {
            case 1:
                this.format = new Format1(x, blockImages);
                break;
            case 2:
                this.format = new Format2(x, blockImages);
                break;
            case 3:
                this.format = new Format3(x, blockImages);
                break;
            case 4:
                this.format = new Format4(x, blockImages);
                break;
            case 5:
                this.format = new Format5(x, blockImages);
                break;
            case 6:
                this.format = new Format6(x, blockImages);
                break;
            case 7:
                this.format = new Format7(x, blockImages);
                break;
            default:
                break;
        }
    }

    /**
     * Retorna valor do formato da peça
     * @returns {number} formato da peça
     */
    getType(){
        return this.type;
    }

    // Métodos de rotação -----------------------------------------------------------------------

    /**
     * Verifica se é possível rotacionar a peça
     * @param {Array} newFormat posições da peça rotacionada
     * @param {matrix} matrix representação do jogo
     * @returns {bool} true se possível rotacionar, false se não
     */
    RotateIsValid(newFormat, matrix){
        // Veerifica se ultrapassa a borda
        for(let k=0; k < newFormat.length; k++){
            let new_x = newFormat[k][0];
            let new_y = newFormat[k][1];
            if (new_x < 0 || new_y < 0 || new_x > 9*30 || new_y > 17*30) return false;
        }

        let i, j;
        // Verifica se ultrapassa outra peça
        for(let k=0; k < newFormat.length; k++){
            i = newFormat[k][1]/30;
            j = newFormat[k][0]/30;
            if(matrix[i][j] != 0) return false;
        }

        return true;
    }

    /**
     * Rotaciona a peça se possível
     * @param {matrix} matrix representação do jogo
     */
    rotate(matrix){        
        let newPosition = this.format.rotate(this.rotation);

        if(this.RotateIsValid(newPosition, matrix)){
            this.updatePosition(newPosition);
            this.rotation = (this.rotation+1)%4;
        }
    }

    /**
     * Atualiza posição da peça
     * @param {Array} newPosition posições dos blocos da peça rotacionada
     */
    updatePosition(newPosition){
        for (let i=0; i < newPosition.length; i++){
            this.format.piece[i].x = newPosition[i][0];
            this.format.piece[i].y = newPosition[i][1];
        }
    }
    
    /**
     * Desenha a peça
     * @param {*} boardContext canva onde será desenhada a peça
     */
    drawPiece(boardContext){
        this.format.piece.forEach(
            i => {
                i.drawBlock(boardContext);
            }
        )
    }
        
    // Métodos de movimentar a peça ----------------------------------------------------------------
    
    /**
     * Desce a peça uma linha na matriz
     * @param {matrix} matrix representação do jogo
     * @returns {bool} true se foi possível abaixar a peça, false se não
     */
    downPiece(matrix){
        let flag = true;
        let i, j;

        // Acessa cada bloco da peça, verificando se a movimentação é válida
        this.format.piece.forEach(
            block => {
                // Para cada bloco verifica se a posição seguinte à ocupada
                // pela peça já não esta ocupada na matriz de posições
                
                i = block.y/30;
                j = block.x/30;
                 
                if(i+1 > 17){
                    flag = false;
                }
                else if(matrix[i+1][j] != 0 || block.y >= 510){
                    flag = false;
                }

            }
        )

        // Se for true, significa que a posição seguinte esta vazia, e a peça pode descer
        if(flag){
            // Movimenta a peça
            this.format.piece.forEach(
                block => {
                    block.down();
                }
            )
            return true;
        }
        else{
            // Consolida a peça na matriz e a torna estática
            this.format.piece.forEach(
                block => {
                    i = block.y/30; 
                    j = block.x/30;
                    matrix[i][j] = this.type;
                }
            )
            return false;
        }
    }

    /**
     * Movimenta a peça na matriz para a esquerda
     * @param {matrix} matrix representação do jogo
     * @returns {bool} true se foi possível, false se não
     */
    leftPiece(matrix){
        let flag = true;

        // Verifica se a movimentação é válida
        this.format.piece.forEach(
            block => {
                // Para cada bloco verifica se a posição à esquerda da ocupada
                // pela peça já não esta ocupada na matriz de posições
                let j = block.x/30;
                let i = block.y/30;

                if(block.x < 0){
                    flag = false;
                }
                else if(matrix[i][j-1] != 0){
                    flag = false;
                }
            }
        )
        //Se for true, significa que a posição seguinte esta vazia, e a peça pode movimentar
        if(flag){
            // Movimenta a peça para a esquerda
            this.format.piece.forEach(
                block => {
                    block.left();
                }
            )
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Movimenta a peça na matriz para a direita
     * @param {matrix} matrix representação do jogo
     * @returns {bool} true se foi possível, false se não
     */
    rightPiece(matrix){
        let flag = true;

        // Verifica se a movimentação é válida
        this.format.piece.forEach(
            block => {
                // Para cada bloco verifica se a posição à direita da ocupada
                // pela peça já não esta ocupada na matriz de posições.
                let j = block.x/30;
                let i = block.y/30;

                if(block.x > 540){
                    flag = false;
                }
                else if(matrix[i][j+1] != 0){
                    flag = false;
                }
            }
        )

        //Se for true, significa que a posição seguinte esta vazia, e a peça pode movimentar
        if(flag){
            // Movimenta a peça para a direita
            this.format.piece.forEach(
                block => {
                    block.right();
                }
            )
            return true;
        }
        else {
            return false;
        }
        
    }
}
import { Format1, Format2, Format3, Format4, Format5, Format6, Format7} from './format.js';


export class Piece {
    constructor(formatValue, x=0) {
        this.type = formatValue;
        this.rotation = 0;

        switch (formatValue) {
            case 1:
                this.format = new Format1(x);
                break;
            case 2:
                this.format = new Format2(x);
                break;
            case 3:
                this.format = new Format3(x);
                break;
            case 4:
                this.format = new Format4(x);
                break;
            case 5:
                this.format = new Format5(x);
                break;
            case 6:
                this.format = new Format6(x);
                break;
            case 7:
                this.format = new Format7(x);
                break;
            default:
                break;
        }
    }

    getType(){
        return this.type;
    }

// Funções de rotação -----------------------------------------------------------------------

    RotateIsValid(newFormat, matrix){
        // Check if it colides with border
        
        // console.log("Antes " + typeof(newFormat) + " novo formato array: " + newFormat);
        for(let k=0; k < newFormat.length; k++){
            let new_x = newFormat[k][0];
            let new_y = newFormat[k][1];
            if (new_x < 0 || new_y < 0 || new_x > 9*30 || new_y > 17*30) return false;
        }

        let i, j;
        // Check if it colides with another piece
        for(let k=0; k < newFormat.length; k++){
            i = newFormat[k][1]/30;
            j = newFormat[k][0]/30;
            if(matrix[i][j] != 0) return false;
        }

        return true;
    }

    rotate(matrix){        
        let newPosition = this.format.rotate(this.rotation);
        console.log("Bem Antes " + newPosition);
        if(this.RotateIsValid(newPosition, matrix)){
            console.log("Validou\n");
            this.updatePosition(newPosition);
            this.rotation = (this.rotation+1)%4;
        }
    }

    updatePosition(newPosition){
        for (let i=0; i < newPosition.length; i++){
            // Atualiza a posição do bloco.
            this.format.piece[i].x = newPosition[i][0];
            this.format.piece[i].y = newPosition[i][1];
        }
    }
    
// -------------------------------------------------------------------------------------------
// Funções de descer as peças ----------------------------------------------------------------
    drawPiece(boardContext){
        this.format.piece.forEach(
            i => {
                i.drawBlock(boardContext);
            }
        )
    }

    downPiece(matrix){
        let flag = true;
        let i, j;
        //Irá acessar cada bloco da peça, verificando se a movimentação é válida
        this.format.piece.forEach(
            block => {
                //Para cada bloco, deverá ver, se a posição seguinte à ocupada
                //pela peça já não esta ocupada na matriz de posições.
                // console.log("This is the index line:", block.y/30)
                
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
        // Se for true, significa que a posição seguinte esta vazia, e a peça pode descer.
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
                    // console.log("i: " + i + " j: " + j);
                    matrix[i][j] = this.type;
                }
            )
            return false;
        }
    }

    leftPiece(matrix){
        let flag = true;
        // Verifica se a movimentação é válida
        this.format.piece.forEach(
            block => {
                //Para cada bloco, deverá ver, se a posição seguinte à ocupada
                //pela peça já não esta ocupada na matriz de posições.
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
        //Se for true, significa que a posição seguinte esta vazia, e a peça pode descer.
        if(flag){
            // Movimenta a peça para a esquerda
            this.format.piece.forEach(
                block => {
                    block.left();
                }
            )
            return true;
        }
        
    }

    rightPiece(matrix){
        let flag = true;
        // Verifica se a movimentação é válida
        this.format.piece.forEach(
            block => {
                //Para cada bloco, deverá ver, se a posição seguinte à ocupada
                //pela peça já não esta ocupada na matriz de posições.
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
        // console.log("a flag é" + flag);
        //Se for true, significa que a posição seguinte esta vazia, e a peça pode descer.
        if(flag){
            // Movimenta a peça para a esquerda
            this.format.piece.forEach(
                block => {
                    block.right();
                }
            )
            return true;
        }
        
    }
}
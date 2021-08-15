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

// Funções de rotação -----------------------------------------------------------------------

    rotate(){        
        let newPosition = this.format.rotate(this.rotation);
        
        if(Piece.RotateIsValid(newPosition)){
            console.log("Validou\n");
            this.updatePosition(newPosition);
            this.rotation = (this.rotation+1)%4;
        }
    }

    static RotateIsValid(newFormat){
        // Check if it colides with border
        for(let k=0; k < newFormat.length; k++){
            let i = newFormat[k][0]/30;
            let j = newFormat[k][1]/30;
            if (i < 0 || j < 0 || i > 9 || j > 17) return false;
        }
        // Check if it colides with others blocks in matrix
        // 
        // 
        return true;
    }

    updatePosition(newPosition){
        for (let i=0; i < newPosition.length; i++){
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

    downPiece(boardContext){
        let flag = true;
        //Irá acessar cada bloco da peça.
        this.format.piece.forEach(
            block => {
                //Para cada bloco, deverá ver, se a posição seguinte à ocupada
                //pela peça já não esta ocupada na matriz de posições.
                let index = block.j + 1;

                if(index >= 0 && block.y >= 510){
                    flag = false;
                }
            }
        )
        //Se for true, significa que a posição seguinte esta vazia, e a peça pode descer.
        if(flag){
            this.format.piece.forEach(
                block => {
                    block.down();
                }
            )
            return true;
        }
        else{
            // Tem que preencher a matriz quando parar.
            return false;
        }
    }
}
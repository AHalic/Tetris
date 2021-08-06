import { Format1, Format2, Format3, Format4, Format5, Format6, Format7} from './format.js';


export class Piece {
    constructor(formatValue) {
        this.type = formatValue;

        switch (formatValue) {
            case 1:
                this.format = new Format1();
                break;
            case 2:
                this.format = new Format2();
                break;
            case 3:
                this.format = new Format3();
                break;
            case 4:
                this.format = new Format4();
                break;
            case 5:
                this.format = new Format5();
                break;
            case 6:
                this.format = new Format6();
                break;
            case 7:
                this.format = new Format7();
                break;
            default:
                break;
        }
    }

    drawPiece(boardContext){
        this.format.piece.forEach(
            i => {
                i.drawBlock(boardContext);
            }
        )
    }

    //NÃO TESTEI ESSA FUNÇÃO, TUDO TEÓRICO...
    downPiece(boardContext){
        flag = false;
        //Irá acessar cada bloco da peça.
        this.format.piece.forEach(
            block => {
                //Para cada bloco, deverá ver, se a posição seguinte à ocupada
                //pela peça já não esta ocupada na matriz de posições.
                index = block.j + 1;
                if(index != 0){
                    flag = True;
                    // Tem que dar um jeito de dar um brake aqui quando for True.
                }
            }
        )
        //Se for false, significa que a posição seguinte esta vazia, e a peça pode descer.
        if(!flag){
            this.format.piece.forEach(
                block => {
                    block.down();
                }
            )
        }
    }
}
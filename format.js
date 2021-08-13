import Block from './block.js';

export class Format1{
    constructor(x=0){
        this.piece =  Array(new Block('purple', 90-x/2, x), new Block('purple', 120-x/2, x), new Block('purple', 120-x/2, x+30), new Block('purple', 150-x/2, x));
    }

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

export class Format2{
    constructor(x=0){
        this.piece =  Array(new Block('green', 90-x/2, x), new Block('green', 120-x/2, x), new Block('green', 120-x/2, x+30), new Block('green', 150-x/2, x+30));
    }
    
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

export class Format3{
    constructor(x=0){
        this.piece =  Array(new Block('orange', 90-x/2, x), new Block('orange', 120-x/2, x), new Block('orange', 150-x/2, x), new Block('orange', 180-x/2, x));
    }
    
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

export class Format4{
    constructor(x=0){
        this.piece =  Array(new Block('blue', 90-x/2, x), new Block('blue', 90-x/2, x+30), new Block('blue', 120-x/2, x), new Block('blue', 150-x/2, x));
    }

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

export class Format5{
    constructor(x=0){
        this.piece =  Array(new Block('yellow', 90-x/2, x), new Block('yellow', 120-x/2, x), new Block('yellow', 150-x/2, x), new Block('yellow', 150-x/2, x+30));
    }
    
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

export class Format6{
    constructor(x=0){
        this.piece =  Array(new Block('brown', 90-x/2, x+30), new Block('brown', 120-x/2, x+30), new Block('brown', 120-x/2, x), new Block('brown', 150-x/2, x));
    }
    
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

export class Format7{
    constructor(x=0){
        this.piece =  Array(new Block('magenta', 120-x/2, x), new Block('magenta', 120-x/2, x+30), new Block('magenta', 150-x/2, x), new Block('magenta', 150-x/2, x+30));
    }

    rotate(){
        return Array(
            [this.piece[0].x, this.piece[0].y],
            [this.piece[1].x, this.piece[1].y],
            [this.piece[2].x, this.piece[2].y],
            [this.piece[3].x, this.piece[3].y]
        )
    }
}
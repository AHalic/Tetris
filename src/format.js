import Block from './block.js';

export class Format1{
    constructor(x=0){
        this.piece =  Array(new Block('#372780', 90-x/2, x), new Block('#372780', 120-x/2, x), new Block('#372780', 120-x/2, x+30), new Block('#372780', 150-x/2, x));
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
        this.piece =  Array(new Block('#4f8d23', 90-x/2, x), new Block('#4f8d23', 120-x/2, x), new Block('#4f8d23', 120-x/2, x+30), new Block('#4f8d23', 150-x/2, x+30));
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
        this.piece =  Array(new Block('#e05d1a', 90-x/2, x), new Block('#e05d1a', 120-x/2, x), new Block('#e05d1a', 150-x/2, x), new Block('#e05d1a', 180-x/2, x));
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
        this.piece =  Array(new Block('#2c5499', 90-x/2, x), new Block('#2c5499', 90-x/2, x+30), new Block('#2c5499', 120-x/2, x), new Block('#2c5499', 150-x/2, x));
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
        this.piece =  Array(new Block('#e8c917', 90-x/2, x), new Block('#e8c917', 120-x/2, x), new Block('#e8c917', 150-x/2, x), new Block('#e8c917', 150-x/2, x+30));
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
        this.piece =  Array(new Block('#b9231f', 90-x/2, x+30), new Block('#b9231f', 120-x/2, x+30), new Block('#b9231f', 120-x/2, x), new Block('#b9231f', 150-x/2, x));
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
        this.piece =  Array(new Block('#ed4974', 120-x/2, x), new Block('#ed4974', 120-x/2, x+30), new Block('#ed4974', 150-x/2, x), new Block('#ed4974', 150-x/2, x+30));
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
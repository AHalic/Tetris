import Block from './block.js';

export class Format1{
    constructor(){
        this.piece =  Array(new Block('purple', 90, 0), new Block('purple', 120, 0), new Block('purple', 120, 30), new Block('purple', 150, 0));
    }
}
export class Format2{
    constructor(){
        this.piece =  Array(new Block('green', 90, 0), new Block('green', 120, 0), new Block('green', 120, 30), new Block('green', 150, 30));
    }
}   
export class Format3{
    constructor(){
        this.piece =  Array(new Block('orange', 90, 0), new Block('orange', 120, 0), new Block('orange', 150, 0), new Block('orange', 180, 0));
    }
}
export class Format4{
    constructor(){
        this.piece =  Array(new Block('blue', 90, 0), new Block('blue', 90, 30), new Block('blue', 120, 0), new Block('blue', 150, 0));
    }
}
export class Format5{
    constructor(){
        this.piece =  Array(new Block('yellow', 90, 0), new Block('yellow', 120, 0), new Block('yellow', 150, 0), new Block('yellow', 150, 30));
    }
}
export class Format6{
    constructor(){
        this.piece =  Array(new Block('brown', 90, 30), new Block('brown', 120, 30), new Block('brown', 120, 0), new Block('brown', 150, 0));
    }
}
export class Format7{
    constructor(){
        this.piece =  Array(new Block('magenta', 120, 0), new Block('magenta', 120, 30), new Block('magenta', 150, 0), new Block('magenta', 150, 30));
    }
}
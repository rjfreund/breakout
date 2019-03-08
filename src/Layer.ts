import { Drawable } from './Drawable';

export class Layer {
    contents: Array<Drawable>;

    constructor(){
        this.contents = new Array<Drawable>();
    }

    push(drawable: Drawable){
        this.contents.push(drawable);
    }
}
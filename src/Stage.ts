import { Layer } from "./Layer";

export default class Stage {
    layers: Array<Layer>;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D | null;

    constructor(){
        this.layers = new Array<Layer>();
        this.canvas = <HTMLCanvasElement> document.querySelector('canvas');    
        this.context = this.canvas.getContext("2d");
        window.addEventListener('resize', () => this.resizeCanvas());
        this.resizeCanvas();
    }

    draw(){
        for (let i=0; i < this.layers.length; i++){
            let layer = this.layers[i];
            for (let k=0; k < layer.contents.length; k++){
                layer.contents[k].draw(this.context);
            }
        }
    }

    resizeCanvas(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.draw();
    }
}
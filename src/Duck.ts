import { Drawable } from "./Drawable";

export class Duck implements Drawable{
    draw(ctx: CanvasRenderingContext2D){
        ctx.beginPath();
        ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
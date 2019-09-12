import { Point } from './point';
export class Cercle {
	constructor()
	{		
	}
	draw(p1 : Point, p2 : Point, ctx : CanvasRenderingContext2D)
	{
		console.log ("Cercle")
		ctx.strokeStyle = "#4bf";
		ctx.beginPath();
		ctx.arc((p1.x + p2.x)/2,(p1.y + p2.y)/2,50,0,2*Math.PI);
		ctx.stroke();		
	}
}

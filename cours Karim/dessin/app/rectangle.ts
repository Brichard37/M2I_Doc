import { Point } from './point';
export class Rectangle 
{
	constructor(){}
	draw(p1 : Point, p2 : Point, ctx : CanvasRenderingContext2D)
	{		
		ctx.strokeStyle = "#4bf";
		ctx.rect(p1.x,p1.y,p2.x,p2.y);
		ctx.stroke();
	}
}

import { Point } from './point';
export class Ligne 
{
	constructor(){}
	draw(p1 : Point, p2 : Point, ctx : CanvasRenderingContext2D)
	{		
		ctx.strokeStyle = "#4bf";
		ctx.moveTo(p1.x,p1.y);
		ctx.lineTo(p2.x,p2.y);
		ctx.stroke();
	}
}

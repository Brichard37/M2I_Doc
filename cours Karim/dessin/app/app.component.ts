import { Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Point } from './point';
import { Ligne } from './ligne';
import { Cercle } from './cercle';
import { Rectangle } from './rectangle';
import * as $ from 'jquery';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dessin';
  affiche : string = "----------------"
  p1 : Point;
  p2 : Point; 
  c : Cercle ;
  l : Ligne;
  r : Rectangle ; 
  @ViewChild('cv',  {static : false}) 
  cv: ElementRef;
  ctx : CanvasRenderingContext2D;
  constructor()
  {
		console.log("******")
		this.p1 = new Point();
		this.p2 = new Point();
		this.p2.x=0;
		this.p2.y=0;
		this.c = new Cercle();
		this.r = new Rectangle();
		this.l = new Ligne();
   }

   ngAfterViewInit() {
	this.ctx = (this.cv.nativeElement as HTMLCanvasElement).getContext('2d');	
   }
   
   nouveauPoint (event)
	{
		this.affiche="Point";
		console.log ("Point")
		this.p1.x=Math.random()*400;
		this.p1.y=Math.random()*400;
		this.p2.x=Math.random()*400;
		this.p2.y=Math.random()*400;
	}

	ligne (){
		this.affiche="Ligne";
		console.log ("Cercle")
		this.p1.x=Math.random()*400;
		this.p1.y=Math.random()*400;
		this.p2.x=Math.random()*400;
		this.p2.y=Math.random()*400;
		this.l.draw(this.p1,this.p2,this.ctx);
	}	
	//affiche='-----------';
	cercle ()
	{
		this.affiche="Cercle";
		console.log ("Cercle")
		this.p1.x=Math.random()*400;
		this.p1.y=Math.random()*400;
		this.p2.x=Math.random()*400;
		this.p2.y=Math.random()*400;
		this.c.draw(this.p1,this.p2,this.ctx)
	}
	rectangle()
	{
		this.affiche="Rectangle";
		console.log ("Rectangle")
		this.ctx.strokeStyle = "#4bf";
		this.p1.x=Math.random()*400;
		this.p1.y=Math.random()*400;
		this.p2.x=Math.random()*400;
		this.p2.y=Math.random()*400;
		this.ctx.rect(this.p1.x,this.p1.y,this.p2.x,this.p2.y);
		this.ctx.stroke();
	}

}

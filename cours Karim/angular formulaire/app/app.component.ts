import { Component, OnInit} from '@angular/core';
import { NgModule }  from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
//import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'exo1';
  data = "----";
  f;
  personne:FormGroup;
  constructor (	private formBuilder: FormBuilder )
  {
	this.personne = new FormGroup({
		nom: new FormControl('TOTO'),
		prenom: new FormControl('toto'),
		age: new FormControl('123'),
	});
	console.log(this.personne)
  }
  valider(p)
  {
   console.log("personne")
   console.log(p.value)
   console.log(this.personne)
   this.data = p.nom + "::" + p.prenom + "::" + p.age
  }
  update()
  {
  }
}

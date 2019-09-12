export class Personne {
	constructor(
		public nom : string,
		public prenom : string,
		public age : number
	)
	{
		this.nom = nom
		this.prenom = prenom
		this.age = age
	}
	getAll ()
	{
		return this.nom +"::"+this.prenom +"::"+ this.age
	}
}
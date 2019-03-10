export class Voto{


	constructor(public dni?: string, public voto?: number){
	}

	getVoto(){
		return this.voto;
	}
}
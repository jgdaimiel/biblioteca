/*export interface Libro {
	id: string,
    title: string,
    autor: string,
    editorial: string,
    portada: string,
    valoracion: Voto[]
}

export interface Voto {
	dni : string,
    voto : number
}*/
import { Voto } from './voto';

export class Libro{

	id: string;
	title: string;
    autor: string;
    editorial: string;
    portada: string;
    valoracion: Voto[];
	
	/*constructor(){
		this.id = "0";
		this.title = "titulo";
		this.autor = "autor";
		this.editorial = "editorial";
		this.portada = "portada";
		this.valoracion = [new Voto("111",1),new Voto("222",2),new Voto("333",3)];
	}*/
	constructor(){
		this.id = "";
		this.title = "";
		this.autor = "";
		this.editorial = "";
		this.portada = "";
		this.valoracion = [new Voto("",0)];
	}


	getValoracion(){
		var resultado = 0;
		for(let v in this.valoracion){
			resultado = resultado + this.valoracion[v].getVoto();
		}
		return Math.ceil(resultado/this.valoracion.length);
	}

}
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Libro } from '../models/libro';
import { Voto } from '../models/voto';
import { biblioteca_prueba } from '../models/biblioteca_prueba'

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  /*Con la anotación @Input se obtiene la variable 'searchText'
  proveniente del componente padre (AppComponent)
  donde se encuentra la caja de búsqueda.*/
  @Input() searchText: string;

  /*La propiedad 'libroSeleccionado' envía al componente padre (AppComponent) el libro seleccionado.*/
  @Output() libroSeleccionado = new EventEmitter<Libro>();

  //Array donde se almacenan todos los libros.
  public biblioteca: Libro[];



  constructor() { }

  //Inicializa la biblioteca
  ngOnInit() {
  	this.biblioteca = [];
  	this.parseBiblioteca();
  }


  /**
  	Método para insertar un nuevo libro en la biblioteca, que se invoca cuando se envía el formulario
	El parámetro de entrada es el nuevo libro que hemos escrito en el formulario.
	El método crea un nuevo libro y copia en éste el que le pasamos por parámetro.
  **/
  public insertaLibro(l: Libro){
  	let libroAux = new Libro();
  	Object.assign(libroAux, l);
  	libroAux.id = String(this.biblioteca.length + 1);
	  this.biblioteca.push(libroAux);
  }


  /**
	Método que se llama al hacer click en un elemento de la biblioteca.
	Se usa para enviar, mediante un evento, el libro seleccionado a AppComponent para editarlo.
  **/
  public selecciona(libro: Libro){
	this.libroSeleccionado.emit(libro);
  }


  /**
  	Este método toma los datos de prueba de 'biblioteca_prueba', que es un array de objetos JSON,
	y los transforma realmente en un array de objetos de tipo Libro,
	de esta manera pueden usarse tanto sus propiedades como sus métodos de clase.

	Tarea pendiente--> refactorizar método
  **/
  private parseBiblioteca(){
  	var arrayVoto = [];

  	for(let b in biblioteca_prueba){
  		let libro = new Libro();
  		Object.assign(libro,biblioteca_prueba[b]);
  		for(let v in libro.valoracion){
  			let voto = new Voto();
  			Object.assign(voto,libro.valoracion[v]);
  			arrayVoto.push(voto);
  		}
  		libro.valoracion = arrayVoto.slice(0);
  		this.biblioteca.push(libro);
  		arrayVoto.length = 0;
  	}
  }

}

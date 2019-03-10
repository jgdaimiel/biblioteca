import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Libro } from './models/libro';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	@ViewChild(BibliotecaComponent)
	private bibComponent: BibliotecaComponent;

	//propiedad para mostrar el bloque del formulario (por defecto oculto)
	public visible: Boolean;

	//propiedad que representa el libro con el que trabaja el formulario
	public libro: Libro;

	//propiedad que indica si se ha seleccionado un libro para editarlo (por defecto false)
	private editar: Boolean;

	//propiedad que guarda el objeto Libro que hay que editar (es distinto del que está en el formulario)
	private libroParaEditar: Libro;



	constructor() { }


	ngOnInit() {
		this.libro = new Libro();
		this.visible = false;
		this.editar = false;	
	}	

	/**
	Método que se llama cuando se recibe el evento de que se ha seleccionado un libro de la lista.
	El parámetro de entrada es el objeto Libro seleccionado.
	El método copia ese objeto Libro en uno nuevo y lo muestra en el formulario para su edición.
	Así mismo guarda el libro pasado por parámetro para actualizarle los cambios al guardar.
	**/
	mostrarLibroSeleccionado(l: Libro){
		Object.assign(this.libro,l);
		this.libroParaEditar = l;
		this.visible = true;
		this.editar = true;
	}

	/**
	Método que se llama al pulsar el botón 'Nuevo'.
	Muestra el formulario e inicializa el objeto Libro asociado al formulario.
	**/
	nuevoLibro(){
		this.libro = new Libro();
		this.visible = true;
		this.editar = false;
	}


	/**
	Método que se llama al enviar el formulario.
	El parámetro de entrada es un objeto formulario para poder hacer validación.
	**/
	onSubmit(f: NgForm){
		if(this.editar){
			//el libro ya existe en la biblioteca 
			//actualizamos el objeto 'libroParaEditar' con los cambios en el formulario
			this.actualizaLibro();
			this.editar = false;
		}
		else{
			//el libro no existe en la biblioteca, hay que insertarlo
			this.bibComponent.insertaLibro(this.libro);
		}
		//limpiamos tanto el formulario como el objeto 'libro' despues de guardar los cambios
		this.libro = new Libro();
		f.reset();
	}


	/**
	Método para actualizar los datos del objeto 'libroParaEditar',
	este objeto ya está en la biblioteca solo hay que actualizar sus campos
	**/
	private actualizaLibro(){
		this.libroParaEditar.id = this.libro.id;
		this.libroParaEditar.title = this.libro.title;
		this.libroParaEditar.autor = this.libro.autor;
		this.libroParaEditar.editorial = this.libro.editorial;
		this.libroParaEditar.portada = this.libro.portada;
		this.libroParaEditar.valoracion = this.libro.valoracion;
		for(let v in this.libro.valoracion){
			this.libroParaEditar.valoracion[v].dni = this.libro.valoracion[v].dni;
			this.libroParaEditar.valoracion[v].voto = this.libro.valoracion[v].voto;
		}
	}


}
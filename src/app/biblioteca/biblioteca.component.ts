import { Component, OnInit, Input } from '@angular/core';

import { Libro } from '../models/libro';
import { biblioteca_prueba } from '../models/biblioteca_prueba'

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  /*obtenemos la variable 'searchText' proveniente del componente padre 'app.component'
  donde se encuentra la caja de búsqueda*/
  @Input() searchText: string;

  public biblioteca : Libro[];

  constructor() { }

  ngOnInit() {
  	this.biblioteca = biblioteca_prueba.concat();
  }

}

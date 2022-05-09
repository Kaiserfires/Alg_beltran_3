import { Component, OnInit } from '@angular/core';
import { Usarios } from 'src/app/entidades/usarios';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  usuarios:Array<Usarios>;
  constructor() {
    this.usuarios=JSON.parse(localStorage.getItem('usuario')??'[]');
}

  ngOnInit(): void {
  }

}

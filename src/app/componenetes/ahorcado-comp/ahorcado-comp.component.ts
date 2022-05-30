import { Component, OnInit } from '@angular/core';
import { Ahorcado } from 'src/app/entidades/ahorcado';

@Component({
  selector: 'app-ahorcado-comp',
  templateUrl: './ahorcado-comp.component.html',
  styleUrls: ['./ahorcado-comp.component.css']
})
export class AhorcadoCompComponent implements OnInit {
  public espacios: Array<string>;
  public letra:string='';
  public miAhorcado:Ahorcado;

  constructor() {
    this.miAhorcado = new Ahorcado();
    this.miAhorcado.palabra = 'Encontrar';
    this.espacios = this.miAhorcado.palabra.split('');
   }

  ngOnInit(): void {
  }

  validar(){
    if(/[a-zA-Z]$/.test(this.letra)){
      this.miAhorcado.letrasElegidas+=(','+ this.letra);
      this.letra='';
    }
  }
  
  contiene(pal:string):boolean{
    return this.miAhorcado.letrasElegidas.toLocaleLowerCase().indexOf(pal.toLocaleLowerCase())>=0;
  }

}
9
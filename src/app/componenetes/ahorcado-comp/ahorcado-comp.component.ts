import { Component, OnInit } from '@angular/core';
import { Ahorcado } from 'src/app/entidades/ahorcado';
import { AhorcadoService } from 'src/app/servicio/ahorcado.service';
import { BanderaService } from 'src/app/servicio/bandera.service';
@Component({
  selector: 'app-ahorcado-comp',
  templateUrl: './ahorcado-comp.component.html',
  styleUrls: ['./ahorcado-comp.component.css']
})
export class AhorcadoCompComponent implements OnInit {
  public espacios: Array<string>;
  public letra:string='';
  public mensaje:string='';
  public x:number=0;
  public miAhorcado:Ahorcado;
  public palabra: any;

  constructor(public BanderaService:AhorcadoService) {
    this.miAhorcado = new Ahorcado();
    
    this.miAhorcado.palabra = 'Encontrar';
    this.espacios = this.miAhorcado.palabra.split('');
   }

  ngOnInit(): void {
    this.BanderaService.getListapalabras().subscribe(resp =>
      {
        this.miAhorcado.palabra=(resp[this.x = Math.floor(Math.random()*250)].name.common);
        this.espacios = this.miAhorcado.palabra.split('');
        console.log(this.espacios);
      });
  }

  validar(){
    if(/[a-zA-Z]$/.test(this.letra)){
      this.miAhorcado.letrasElegidas+=(','+ this.letra);
      this.letra='';
    }else{
      this.letra="";
      this.mensaje="Debe ingresar solo letras";
    }
  }
  
  contiene(pal:string):boolean{
    return this.miAhorcado.letrasElegidas.toLocaleLowerCase().indexOf(pal.toLocaleLowerCase())>=0;
  }

}
9
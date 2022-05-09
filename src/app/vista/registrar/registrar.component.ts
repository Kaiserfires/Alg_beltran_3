import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { userInfo } from 'os';
import { Usarios } from 'src/app/entidades/usarios';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  MyUsuario:Usarios;
  constructor(public ruteo:Router){
    this.MyUsuario = new Usarios();
  }
  ngOnInit(): void {
      
    }
  /*filtro(us:Usarios){
    return us.nombre== this.MyUsuario.nombre;
  }*/
  registrar(){
    let ListUsuarioSerial:string=localStorage.getItem('usuario')??'[]';
    let ListUsuario:Array<Usarios>=JSON.parse(ListUsuarioSerial);
    if(!ListUsuario.find((us)=>us.nombre== this.MyUsuario.nombre)){
      ListUsuario.push(this.MyUsuario);
    }
    localStorage.setItem('usuario',JSON.stringify(ListUsuario))
    this.ruteo.navigateByUrl('login');
  }
}
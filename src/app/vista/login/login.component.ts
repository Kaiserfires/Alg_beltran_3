import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usarios } from 'src/app/entidades/usarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre:string="escriba aqui";
  contrasenia:string="";
  MyUsuario:Usarios;

    constructor(public route:Router) { 
    this.MyUsuario = new Usarios();
      
    }

    ngOnInit(): void {
    }
    /*filtro(us:Usarios){
      return us.usuario == this.MyUsuario.usuario && us.contrasenia == this.MyUsuario.contrasenia;

    }*/
    loguear(){
        let ListUsuarioSerial:string=localStorage.getItem('usuario')??'[]';
        let ListUsuario:Array<Usarios>=JSON.parse(ListUsuarioSerial);
        if(ListUsuario.find((us)=>this.MyUsuario.usuario ==us.usuario && us.contrasenia == this.MyUsuario.contrasenia)){
          this.route.navigateByUrl("/bienvenida");
          localStorage.setItem('usuarioLogueado',this.nombre);
        }
  }
}
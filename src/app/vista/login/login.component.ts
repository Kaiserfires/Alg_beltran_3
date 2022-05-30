import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
  //MyUsuario:Usarios;
  public formu:FormGroup;

    constructor(public route:Router,public fb:FormBuilder) { 
     //this.MyUsuario = new Usarios();
      this.formu=this.fb.group({
        'nombres':['',[Validators.required]],
      'pass':['',[Validators.min(5),Validators.required]]});
    }

    ngOnInit(): void {
    }
    /*filtro(us:Usarios){
      return us.usuario == this.MyUsuario.usuario && us.contrasenia == this.MyUsuario.contrasenia;

    }*/
    loguear(){
        let ListUsuarioSerial:string=localStorage.getItem('usuario')??'[]';
        let ListUsuario:Array<Usarios>=JSON.parse(ListUsuarioSerial);
        // if(ListUsuario.find((us)=>this.MyUsuario.usuario ==us.usuario && us.contrasenia == this.MyUsuario.contrasenia)){
        //   this.route.navigateByUrl("/bienvenida");
        //   localStorage.setItem('usuarioLogueado',this.nombre);
        // }
  }
  loguear2(){
    this.formu.getRawValue();
  }
}
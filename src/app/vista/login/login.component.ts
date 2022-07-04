import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Usarios } from 'src/app/entidades/usarios';
import { UserFlagService } from 'src/app/servicio/user-flag.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre:string="escriba aqui";
  contrasenia:string="";
  //premiun:boolean=false;
  //MyUsuario:Usarios;
  public formu:FormGroup;

    constructor(public route:Router,public fb:FormBuilder, public UserFlag:UserFlagService) { 
     //this.MyUsuario = new Usarios();
      this.formu=this.fb.group({
        'usuario':['',[Validators.required]],
      'contrasenia':['',[Validators.minLength(4),Validators.required]]});
    }

    ngOnInit(): void {
    }
    /*filtro(us:Usarios){
      return us.usuario == this.MyUsuario.usuario && us.contrasenia == this.MyUsuario.contrasenia;

    }*/
    /*loguear(){
        let ListUsuarioSerial:string=localStorage.getItem('usuario')??'[]';
        let ListUsuario:Array<Usarios>=JSON.parse(ListUsuarioSerial);
        // if(ListUsuario.find((us)=>this.MyUsuario.usuario ==us.usuario && us.contrasenia == this.MyUsuario.contrasenia)){
        //   this.route.navigateByUrl("/bienvenida");
        //   localStorage.setItem('usuarioLogueado',this.nombre);
        // }
  }*/
  loguear2(){
    //this.UserFlag.MyUserFlag=this.formu.getRawValue();
    let usuario:Usarios=this.formu.getRawValue();
    let ListUsuarioSerial/*:string*/=localStorage.getItem('usuario')??'[]';
    let ListUsuario:Array<Usarios>=JSON.parse(ListUsuarioSerial);
    //this.premiun=localStorage.getItem('usuario')??'[premiun]';
    //if(!localStorage.getItem("premiun")){this.UserFlag.MyUserFlag.premiun=localStorage.getItem('usuario')??'[]'.f}
    if(ListUsuario.find((us)=>usuario.usuario ==us.usuario && us.contrasenia == usuario.contrasenia)){
      
      this.UserFlag.login(usuario);  
      this.route.navigateByUrl("/bienvenida");
      
        
      }

  }
  
  aceptar(){}
}
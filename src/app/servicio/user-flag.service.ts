import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usarios } from '../entidades/usarios';

@Injectable({
  providedIn: 'root'
})
export class UserFlagService {
  public MyUserFlag:Usarios;
  public logueado:boolean = false;
  public premiunFlag:boolean;
  public posicion:number | undefined;
  public colectorUsers: Array<Usarios> = [];
  public name:any=null;

  

  constructor(public route:Router) {
    this.MyUserFlag = new Usarios();
    this.logueado=false;
    this.usuarioEnLinea();
    this.premiunFlag=false;
    

    //this.premiunCheck();

  }
  
  login(MyUserFlag:Usarios){
    this.logueado=true;
    this.MyUserFlag=MyUserFlag;
    localStorage.setItem('usuarioLogueado',JSON.stringify(MyUserFlag));// aca llega el usuario 
    this.premiunCheck();
    
    
    
  }

logout(){

  this.logueado=false;
  this.MyUserFlag = new Usarios();
  localStorage.setItem('usuarioLogueado','');
}

usuarioEnLinea(){
  var A=localStorage.getItem('usuarioLogueado');
  
  if(A && A!=""){
    this.MyUserFlag=JSON.parse(A);
    this.logueado=true;
  }
}

getPosicion(){
  this.colectorUsers=JSON.parse(localStorage.getItem('usuario')??"[]");
  //if (localStorage.getItem("usuarioLogueado")) {
    this.name = JSON.parse(localStorage.getItem("usuarioLogueado") || "{}");
  //}
  console.log(this.colectorUsers);
  console.log(this.name);
  return this.colectorUsers.find((t) => this.name.usuario == t.usuario);

}
//servicio premiun
premiunCheck() {
  var posicion = this.getPosicion();
  
  if(posicion){
    var B:boolean = posicion.premiun;
    if(!B){
       this.premiunFlag = false;
    }else{
       this.premiunFlag = true;
    }
  }
}
  

}
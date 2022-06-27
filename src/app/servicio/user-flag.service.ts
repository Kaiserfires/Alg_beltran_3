import { Injectable } from '@angular/core';
import { Usarios } from '../entidades/usarios';

@Injectable({
  providedIn: 'root'
})
export class UserFlagService {
  public MyUserFlag:Usarios;
  public logueado:boolean = true;
  

  constructor() {
    this.MyUserFlag = new Usarios();
    this.logueado=false;
    this.usuarioEnLinea();
   }
   
  login(MyUserFlag:Usarios){
    this.logueado=true;
    this.MyUserFlag=MyUserFlag
    localStorage.setItem('usuarioLogueado',JSON.stringify(MyUserFlag));// aca llega el usuario 
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


}
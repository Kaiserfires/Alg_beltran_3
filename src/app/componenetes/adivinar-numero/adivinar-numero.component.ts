import { Component, OnInit } from '@angular/core';
import { AdivNum } from 'src/app/entidades/adiv-num';

@Component({
  selector: 'app-adivinar-numero',
  templateUrl: './adivinar-numero.component.html',
  styleUrls: ['./adivinar-numero.component.css']
})
export class AdivinarNumeroComponent implements OnInit {
  play:boolean;
  victorias:number;
  perdidas:number;

  myjuego:AdivNum;
  constructor() { 
    this.myjuego=new AdivNum();
    this.play=false;
    this.victorias=0;
    this.perdidas=0;
  }

  ngOnInit(): void {
  }

  iniciar(){
    this.play=true;
    this.myjuego.val_aleatorio();
    this.myjuego.trys=0;
  }
  ganarPerder(){
    if(this.myjuego.victoria_derrota()==true){
    this.play=false;
    this.victorias++;}
    else if(this.myjuego.victoria_derrota()==false){
      this.play=false
      this.perdidas++;
    }else{
      this.play=true
      this.myjuego.trys++;}
  }
  
}

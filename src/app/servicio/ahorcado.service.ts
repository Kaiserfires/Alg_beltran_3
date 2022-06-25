import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Welcome } from '../componenetes/ahorcado-comp/models/responde';

@Injectable({
  providedIn: 'root'
})
export class AhorcadoService {

  public url:string ='https://restcountries.com/v3.1/all';

  constructor(public servicio:HttpClient) { }

  getListapalabras():Observable<Welcome[]>{
    return this.servicio.get<Welcome[]>(this.url);
  }
  getRandomWord(){
    this.getListapalabras().subscribe(resp=>{(resp[Math.floor(Math.random()*250)].name.common);});

  }

}

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../entidades/pais';

@Injectable({
  providedIn: 'root'
})
export class BanderaService {
    public url:string="https://restcountries.com/v3.1/all";
    public paises:Array<Pais>|undefined;      //Array<Pais>|undefined;
 
    constructor(public miCliente:HttpClient) { 
    

    
  }
  getPaises():Observable<Array<Pais>> {
      return this.miCliente.get<Array<Pais>>(this.url);//.subscribe(x=>{this.paises=x});
    }
}
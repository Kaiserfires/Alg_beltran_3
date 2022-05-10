import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Pais } from 'src/app/entidades/pais';
import { BanderaService } from 'src/app/servicio/bandera.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  misBanderas:Observable<Array<Pais>>|undefined;
  
  miBandera:string="";

  constructor(public banderaS:BanderaService) { 
    console.log(banderaS.paises);
    this.misBanderas=banderaS.getPaises();

  }

  ngOnInit(): void {
  }
  ver(){
    console.log(this.banderaS.paises);
  }
  seleccionar(ban:string){
    this.miBandera=ban;

  }
}

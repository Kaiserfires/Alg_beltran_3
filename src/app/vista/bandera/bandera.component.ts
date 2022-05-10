import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandera',
  templateUrl: './bandera.component.html',
  styleUrls: ['./bandera.component.css']
})
export class BanderaComponent implements OnInit {
  @Input()
  bandera:string|undefined;
  constructor() { }
 
  ngOnInit(): void {
  }

}

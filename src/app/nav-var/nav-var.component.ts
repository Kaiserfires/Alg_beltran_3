import { Component, OnInit } from '@angular/core';
import { UserFlagService } from '../servicio/user-flag.service';

@Component({
  selector: 'app-nav-var',
  templateUrl: './nav-var.component.html',
  styleUrls: ['./nav-var.component.css']
})
export class NavVarComponent implements OnInit {
  visible:boolean=false;
  visiblePremiun:boolean=false;

  constructor(public UserFlag:UserFlagService) { 
   this.visible=false;
   this.visiblePremiun=false;
  }

  ngOnInit(): void {
    this.visible=this.UserFlag.logueado;
    this.visiblePremiun=this.UserFlag.premiunFlag;

  }

  btnLogout(){
    this.UserFlag.logout();
  }
}

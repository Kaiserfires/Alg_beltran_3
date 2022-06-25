import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Usarios } from '../entidades/usarios';
import { UserFlagService } from '../servicio/user-flag.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private UserFlag:UserFlagService) { }

  ngOnInit(): void {
  }

  logingout(){
     this.UserFlag.logout();
  }
}



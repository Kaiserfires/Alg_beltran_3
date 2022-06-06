import { Injectable } from '@angular/core';
import { Usarios } from '../entidades/usarios';

@Injectable({
  providedIn: 'root'
})
export class UserFlagService {
  public MyUserFlag:Usarios;

  constructor() {
    this.MyUserFlag = new Usarios();

   }
}

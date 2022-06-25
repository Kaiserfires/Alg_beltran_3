import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserFlagService } from '../servicio/user-flag.service';


@Injectable({
  providedIn: 'root'
})
export class AccesoGuard implements CanActivate { 
  /**
   *
   */
  constructor(private UserFlag:UserFlagService, private router: Router) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
    if( !this.UserFlag.logueado){  //agregar un metodo booleano  que cheuee el local storage  true le tiene que dar acceso y el false tiene que redirigir
      this.router.navigate(['/login']);
      
      
    }
    return true;
  }
  
}


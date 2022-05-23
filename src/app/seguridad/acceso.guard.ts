import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoGuard implements CanActivate { 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
    if( localStorage.getItem('usuarioLogueado')!=null){  //agregar un metodo booleano  que cheuee el local storage  true le tiene que dar acceso y el false tiene que redirigir
        return true;
    }
    return false;
  }
  
}


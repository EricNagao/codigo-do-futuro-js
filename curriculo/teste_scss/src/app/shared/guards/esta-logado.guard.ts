import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstaLogadoGuard implements CanActivate {
  canActivate(): boolean{
    console.log('passou pela guarda da rota')  
  return true;
  }
  
}

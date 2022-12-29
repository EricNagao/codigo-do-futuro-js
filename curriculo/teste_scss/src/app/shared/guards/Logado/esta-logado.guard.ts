import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstaLogadoGuard implements CanActivate {

  constructor(
    private authService: AuthService,
  ) { }
  
  canActivate(): boolean{
  const estaLogado = this.authService.estaLogado();
    if( estaLogado){
      return true
    }
    return false
 
}
  

}

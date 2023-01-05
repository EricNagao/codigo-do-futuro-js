import { Injectable } from '@angular/core';
import { delay, mergeMap, Observable, of, tap, throwError, timer } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { LoginResponse } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
  ) { }
  
email: any ;
password: any ;
  
  logar(email: string, senha: string): Observable<LoginResponse> {
    //return this.http.post<[]> (`${this.API_URL}/login/`+ contato, this.httpOptions);

    if(email==='teste@teste.com' && senha ==='123'){
      return of({
        usuario:
          {
            nome:'teste',
            sobrenome: 'tesssste',
            email: 'teste@teste.com',
          },  

          token:  '!3121ijjh2nn3b12kasD!@',
        }) .pipe(
          delay(2000),
          tap(response=>{
            this.authService.setUsuario(response.usuario);
            this.authService.setToken(response.token);
          })
          
        );
  }
  return timer(2000).pipe (
    mergeMap(() => throwError ('User / Senha Invalid')));   

}

}
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(  ) { }
  
email: any ;
password: any ;
  
  logar(email: string, senha: string):any {
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
        } ); 
  }
  throwError('User / Senha Invalid');   

}

}
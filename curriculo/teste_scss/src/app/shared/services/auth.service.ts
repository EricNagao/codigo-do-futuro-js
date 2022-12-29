import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario: Usuario | undefined;
  token: string |undefined;

  constructor() { }

  setUsuario(usuario: Usuario){
    this.usuario= usuario;
      localStorage.setItem('usuario',JSON.stringify(usuario));
  }

  getUsuario(){
    const usuarioGuardado = localStorage.getItem('usuario');

      if(this.usuario){
        return this.usuario;
      }

      if(usuarioGuardado){
        this.usuario =JSON.parse(usuarioGuardado);
        return JSON.parse(usuarioGuardado);
      }
      return null
  }

  setToken(token: string){
    this.token= token;
      localStorage.setItem('token',token);
  }

  getToken(){
    if(this.token){
      return this.token;
    }
  
    const tokenGuardado = localStorage.getItem('token');
    if(tokenGuardado){
      this.token =tokenGuardado
      return this.token
    }
    return null
  }


  estaLogado(): boolean{
    return this.getUsuario()&& this.getToken() ? true : false; //perador ternario, se get user e tokerm se forem verdade, retornan verdade , se nao, falso.
  }

}

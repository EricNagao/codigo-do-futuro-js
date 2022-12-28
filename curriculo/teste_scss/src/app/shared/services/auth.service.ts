import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario: any;

  constructor() { }

  setUsuario(usuario: any){
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

  
}

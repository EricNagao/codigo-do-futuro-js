import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setUsuario(usuaruio: any){
      localStorage.setItem('usuario',JSON.stringify(usuaruio));
  }

  getUsuario(){
    const usuarioGuardado = localStorage.getItem('usuario');
    
      if(usuarioGuardado){
        return JSON.parse(usuarioGuardado);
      }
      return null
  }

  
}

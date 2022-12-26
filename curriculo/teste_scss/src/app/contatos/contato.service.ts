import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contato } from './contato.interface';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  API_URL=environment.API_URL;

  constructor(
    private http: HttpClient,
  ) { }
  
    getContatos(){
      return this.http.get<Contato[]> (`${this.API_URL}/contatos`);
    }

    getContato(id: any){
      return this.http.get<Contato> (`${this.API_URL}/contatos/` + id);
    }

  
    createContato(contato: Contato){
      return this.http.post<Contato[]> (`${this.API_URL}/contatos/`,contato);
    }
    
    updateContato(){
      return this.http.put<Contato[]> (`${this.API_URL}/contatos/`,contato);
    }
}

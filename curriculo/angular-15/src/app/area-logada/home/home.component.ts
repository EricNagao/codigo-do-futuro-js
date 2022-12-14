import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario: any;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.usuario = this.authService.getUsuario();
  }

  abrirModal(){
  console.log("abrir modal")
  }

}

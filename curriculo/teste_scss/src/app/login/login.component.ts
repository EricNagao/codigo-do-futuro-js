import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent{

  @ViewChild('emailInput') emailInput: any;
  @ViewChild('passwordInput') passwordInput: any;

    email: any 
    password: any 

    estaCarregando: boolean | undefined;
    erroNoLogin: boolean | undefined;
    response: any;
    error: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }
    ngOnInit(): void 
    {
  }

  onSubmit(form: any){
      if(!form.valid){
        form.controls.email.markAsTouched();
        form.controls.password.markAsTouched();

        if(form.controls.email.invalid){
          this.emailInput.nativeElement.focus();
          return
        }
        if (form.controls.password.invalid) {
          this.passwordInput.nativeElement.focus();
          return;
        } 

        console.log(form)
        console.log('Formulario inválido doido!')
        return ;
      }
        console.log('email: ', this.email);
        console.log('password: ', this.password);
  }

  exibeErro(nomeControle: string, form: any){
    if(!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

  
  login(){
    this.loginService.logar; null; (this.email, this.password)
    .subscribe(
      (response: any)=>{
        console.log("logou")
      },
      (error:any) =>{
        console.log("nao logou")
      },
    )
  }
  

}

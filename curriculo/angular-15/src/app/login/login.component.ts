import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('emailInput') emailInput: ElementRef | any;
  @ViewChild('passwordInput') passwordInput: ElementRef | any;

  email: string | any;
  password: string | any;

  estaCarregando: boolean | undefined;
  erroNoLogin: boolean | undefined;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  onSubmit(form: any) {
    this.erroNoLogin = false;

    if (!form.valid) {
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();

      if (form.controls.email.invalid) {
        this.emailInput.nativeElement.focus();
        return;
      }

      if (form.controls.password.invalid) {
        this.passwordInput.nativeElement.focus();
        return;
      }

      return;
    }

    this.login();
  }

  login() {
    this.estaCarregando = true;

    this.loginService.logar(this.email, this.password)
      .pipe(
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSuccessLogin(),
        error => this.onErrorLogin(),
      );
  }

  onSuccessLogin() {
    this.router.navigate(['home']);
  }

  onErrorLogin() {
    this.erroNoLogin = true;
  }

  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      return false;
    }

    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

}
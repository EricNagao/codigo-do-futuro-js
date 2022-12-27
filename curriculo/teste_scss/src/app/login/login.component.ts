import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

    email: string | undefined
    password: string | undefined

  constructor() { }
    ngOnInit(): void {
  }

  onSubmit(form: any){
      if(!form.valid){
        form.controls.email.marksAsTouched();
        form.controls.password.marksAsTouched();
        
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

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router){}

  userName: string;

  login(){
    //salva na memoria do navegador durante a sessao
    sessionStorage.setItem('user', this.userName);

    this.router.navigate(['/home']);
  }
}

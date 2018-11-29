import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading:boolean= false;
  isLoginError:boolean=false;
  error;
  loginForm: FormGroup;

  constructor(private loginService : LoginService, private router:Router) { }

  ngOnInit() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('editUserId');
  }

  OnSubmit(loginForm){
    this.loading = true;
    let userName = loginForm.controls.email.value;
    let password = loginForm.controls.pwd.value;
     this.loginService.login(userName,password).subscribe((data : any)=>{
      this.loading = false;
      localStorage.setItem('userToken',data.token);
      this.router.navigate(['/dashboard']);
    },
    (err : HttpErrorResponse)=>{
      this.loading = false;
      this.isLoginError = true;
      this.error = err.error.error;
    });
  }
}

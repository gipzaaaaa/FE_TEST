import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service'
import { Router } from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading:boolean = false;  
  error;
  constructor(private loginService : LoginService, private router:Router) { }
  private gender:string[];
  ngOnInit() {
    
  }

  register(loginForm){
    debugger;
    this.loading = true;
    let userName = loginForm.controls.email.value;
    let password = loginForm.controls.pwd.value;
     this.loginService.registerUser(userName,password).subscribe((data : any)=>{
      this.loading = false;
      localStorage.setItem('userToken',data.token);
      this.router.navigate(['/login']);
    },
    (err : HttpErrorResponse)=>{
      this.loading = false;
      this.error = err.error.error;
    });
  }
}

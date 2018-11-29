import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Injectable()
export class LoginService {
  private url: string = 'https://reqres.in';
  constructor(private http: HttpClient) { }
  login(userName,password) {
    var data = {
      "email": userName,
      "password": password
  }
    return this.http.post(this.url + '/api/login', data);
  }

  registerUser(userName,password) {
    var data = {
      "email": userName,
      "password": password
  }
    return this.http.post(this.url + '/api/register', data);
  }

  
}
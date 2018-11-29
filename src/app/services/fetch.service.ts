import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { map} from 'rxjs/operators';
import 'rxjs/Rx';



@Injectable()
export class FetchService {

private BASE_URL:string = 'https://reqres.in/api/users/';
constructor(private http:HttpClient) { }

public getDelay():any{
  return this.http.get('/api/users?delay=3');
}
public getEmployeeDetails(page:Number):any{
 return this.http.get(`${this.BASE_URL}?page=${page}`) 
}
public updateEmployee(id,firstName,lastName) {
  var data = {
    "first_name": firstName,
    "last_name": lastName
  }
  return this.http.put(this.BASE_URL + id,data);
}

public deleteEmployee(id) {
  return this.http.delete(this.BASE_URL + id);
}
  
public getEmpById(id) {
  return this.http.get(this.BASE_URL + id);
}
}
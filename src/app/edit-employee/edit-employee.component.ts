import { Component, OnInit ,EventEmitter, Output, Input} from '@angular/core';
import { FetchService } from '../services/fetch.service';
import {NgForm} from '@angular/forms';
import {Router,Route} from '@angular/router';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input() fName;
  @Input() lName;
  constructor(private fetchService : FetchService, private router:Router) { }
  
  ngOnInit() {
    
  }
  updateEmployee(updateForm){
    let firstName = updateForm.controls.fName.value;
    let lastName = updateForm.controls.lName.value;
    let userId =  localStorage.getItem('editUserId');
    var list = {
      "first_name": firstName,
      "last_name": lastName,
      "id":userId
    }
    this.fetchService.updateEmployee(userId,firstName,lastName)
    .subscribe(
      data => {
        this.valueChange.emit(list);
        this.router.navigate(['dashboard']);
      },
      error => {
        alert(error);
      });
  }
}

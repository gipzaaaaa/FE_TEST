import { Component, OnInit } from '@angular/core';
import {FetchService} from '../services/fetch.service';
import {Router,Route} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loading:boolean= false;
  isLoginError:boolean=false;
  error;
  data:Object;
  pageNumber:number = 1;
  public isCollapsed;
  fName;
  lName;
  constructor(private fetchService : FetchService, private router:Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.isCollapsed = true;
    this.getInitialData();
  }
  public getInitialData(){
    this.loading=true;
    this.fetchService.getEmployeeDetails(1).subscribe(
      response =>{
      this.loading=false;
      this.data = response.data;
     },
      error =>{
        this.loading=false;
          this.toastr.error('Server error.Could not delete the item','Failure');
      }
    );
  }
public getServerData(event) {
  this.pageNumber++;
  this.loading=true;
  this.fetchService.getEmployeeDetails(this.pageNumber).subscribe(
    response =>{
      this.loading=false;
      this.data = response.data;
     },
      error =>{
        this.loading=false;
        this.toastr.error('Server error.Could not delete the item','Failure');
      }
    );

}
  public deleteEmployee(id){
      let r = confirm("Are you sure?");
 		  if (r == true) {
 			this.fetchService.deleteEmployee(id)
 			.subscribe( data => {
        this.toastr.success('Item deleted successfully','Success');
        
      },
      error =>{
        this.toastr.error('Server error.Could not delete the item','Failure');
      })
      
 		}
  };

 public loadUpdateForm(id) {
    this.isCollapsed = !this.isCollapsed;
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId',id);
    let userId =  localStorage.getItem('editUserId');
   
    if(userId) {
      this.fetchService.getEmpById(userId)
        .subscribe( data => {
          
          this.fName = data.data.first_name;
          this.lName = data.data.last_name;
          
        });
    }
 }
  public updateList (list) {
      
      this.isCollapsed = !this.isCollapsed;
      for(var i=0;i<this.data.length;i++) {
          if (this.data[i].id.toString() === list.id) {
            this.data[i].first_name = list.first_name;
            this.data[i].last_name = list.last_name;
          }
      }
  }
}
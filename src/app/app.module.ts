import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ToastrModule } from 'ngx-toastr'; 
import {HttpClientModule} from '@angular/common/http';
import {Ng2PaginationModule} from 'ng2-pagination';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


/*Components*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './index/app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

/* Services */
import {LoginService} from './services/login.service';
import {FetchService} from './services/fetch.service';
import { FilterPipe } from './pipes/filter.pipe'
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    EditEmployeeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot({ 
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    HttpClientModule,
    Ng2PaginationModule,
    NgbModule
  ],
  providers: [LoginService,FetchService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

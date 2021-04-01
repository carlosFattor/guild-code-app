import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login.component';
import { LoginApi } from './service/login.api';
import { LoginService } from './service/login.service';


@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule
  ],
  providers: [
    LoginApi,
    LoginService
  ]
})
export class LoginModule { }

import { LoginPageComponent } from './login-page/login-page.component';
import { GeneralModule } from '../../general.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    GeneralModule
  ]
})
export class LoginModule {}

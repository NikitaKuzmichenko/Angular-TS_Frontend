import { RegisterPageComponent } from './register-page/register-page.component';
import { GeneralModule } from '../../general.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    GeneralModule
  ]
})
export class RegisterModule { }

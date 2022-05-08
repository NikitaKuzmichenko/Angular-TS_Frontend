import {CreateCertificatePageComponent} from './create-certificate-page/create-certificate-page.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../general.module';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes =[
    {
      path :'',
      component : CreateCertificatePageComponent
    }
  ]
  
@NgModule({
    declarations: [
        CreateCertificatePageComponent
    ],
    imports: [
        RouterModule.forChild(appRoutes),
        CommonModule,
        GeneralModule
    ]
  })
  export class CreateCertificateModule { }
  
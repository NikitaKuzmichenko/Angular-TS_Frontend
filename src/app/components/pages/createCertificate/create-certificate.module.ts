import {CreateCertificatePageComponent} from './create-certificate-page/create-certificate-page.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../general.module';
import { RouterModule, Routes } from '@angular/router';
import { MultiSeltctCategoryDropdownComponent } from './multi-seltct-category-dropdown/multi-seltct-category-dropdown.component';
import { MatSelectModule} from '@angular/material/select';
import { ScrollingModule } from '@angular/cdk/scrolling';

const appRoutes: Routes =[
    {
      path :'',
      component : CreateCertificatePageComponent
    }
  ]
  
@NgModule({
    declarations: [
        CreateCertificatePageComponent,
        MultiSeltctCategoryDropdownComponent
    ],
    imports: [
        RouterModule.forChild(appRoutes),
        CommonModule,
        GeneralModule,
        MatSelectModule,
        ScrollingModule 
    ]
  })
  export class CreateCertificateModule { }
  
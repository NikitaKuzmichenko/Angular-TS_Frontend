import { GeneralModule } from '../../general.module';
import { CertificateDetailsPageComponent} from './certificate-details-page/certificate-details-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpirationtDateFormatPipe } from 'src/app/pipes/expirationt-date-format.pipe';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes =[
  {
    path :'',
    component : CertificateDetailsPageComponent
  }
]

@NgModule({
  declarations: [
      CertificateDetailsPageComponent,
      ExpirationtDateFormatPipe
  ],
  imports: [
      RouterModule.forChild(appRoutes),
      GeneralModule,
      CommonModule
  ]
})
export class CertificateDetailsModule { }

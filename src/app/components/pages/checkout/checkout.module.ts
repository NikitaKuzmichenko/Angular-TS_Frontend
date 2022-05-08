import { GeneralModule } from '../../general.module';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasedCertificateComponent } from './purchased-certificate/purchased-certificate.component';


@NgModule({
  declarations: [
    CheckoutPageComponent,
    PurchasedCertificateComponent
  ],
  imports: [
    CommonModule,
    GeneralModule
  ]
})
export class CheckoutModule { }

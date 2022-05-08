import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MainPageComponent } from './components/pages/main/main-page/main-page.component';
import { RegisterPageComponent } from './components/pages/register/register-page/register-page.component';
import { MainPageModule } from './components/pages/main/main-page.module';
import { GeneralModule } from './components/general.module';
import { RegisterModule } from './components/pages/register/register.module';
import { LoginPageComponent } from './components/pages/login/login-page/login-page.component';
import { LoginModule } from './components/pages/login/login.module';
import { CheckoutModule } from './components/pages/checkout/checkout.module';
import { CheckoutPageComponent } from './components/pages/checkout/checkout-page/checkout-page.component';


const appRoutes: Routes =[
  {
    path :'' ,
    component : MainPageComponent
  },  
  {
    path :'register' ,
    component : RegisterPageComponent
  },
  {
    path :'login' ,
    component : LoginPageComponent
  },
  {
    path :'checkout' ,
    component : CheckoutPageComponent
  },
  {
    path :'certificate/:id/details' ,
    loadChildren : ()=> import("./components/pages/certificateDetails/certificate-details.module").
    then(m=>m.CertificateDetailsModule)
  },
  {
    path :'create/certificate' ,
    loadChildren : ()=> import("./components/pages/createCertificate/create-certificate.module").
    then(m=>m.CreateCertificateModule)
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,

    GeneralModule,
    RegisterModule,
    MainPageModule,
    LoginModule,
    CheckoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

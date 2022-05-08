import { MainPageComponent } from './main-page/main-page.component';
import { CertificateListComponent } from './certificate-list/certificate-list.component';
import { CertificatePreviewComponent } from './certificate-preview/certificate-preview.component';
import { CategoriesPreviewComponent } from './categories-preview/categories-preview.component';
import { CategoryPreviewComponent } from './category-preview/category-preview.component';
import { GeneralModule } from '../../general.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MainPageComponent,
    CertificateListComponent,
    CertificatePreviewComponent,
    CategoryPreviewComponent,
    CategoriesPreviewComponent
  ],
  imports: [
    CommonModule,
    GeneralModule
  ]
})
export class MainPageModule { }

import { HeaderComponent } from './header/header.component';
import { HiddenTextComponent } from './hidden-text/hidden-text.component';
import { ButtonComponent } from './button/button.component';
import { CategoriesDropdownComponent } from './categories-dropdown/categories-dropdown.component';
import { WindowNavigatorComponent } from './window-navigator/window-navigator.component';
import { PriceFormatPipe } from '../pipes/price-format.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule} from '@angular/material/select';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    HeaderComponent,
    HiddenTextComponent,
    ButtonComponent,
    CategoriesDropdownComponent,
    WindowNavigatorComponent,
    PriceFormatPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatSelectModule,
    ScrollingModule 
  ],
  exports:[
    HeaderComponent,
    HiddenTextComponent,
    ButtonComponent,
    CategoriesDropdownComponent,
    WindowNavigatorComponent,
    PriceFormatPipe,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class GeneralModule { }

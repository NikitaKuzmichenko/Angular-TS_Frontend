import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { toNumber } from 'lodash';
import { Certificate } from 'src/app/entities/certificate';
import { LocalShoppingCartService } from 'src/app/services/shopping-cart-service.service';
import { PageRouter, Pages } from 'src/app/utils/pageRouter';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  certificates: Certificate[];
  totalPrice : number = 0;
  previusUrl : string;

  constructor(private router : Router,
    private pageRouter : PageRouter,
    private shoppingCar : LocalShoppingCartService) {

    this.certificates = shoppingCar.getAllCertificates();
    this.certificates.forEach(c=>this.totalPrice+=toNumber(c.price));

    let url = this.pageRouter.getPreviusUrl();
    if(url === undefined){
      url= this.pageRouter.getPath(Pages.MainPage);
    }
    this.previusUrl = url;
   }

  ngOnInit(): void {}

  submitForm(){
    this.shoppingCar.clerar();
    this.router.navigateByUrl(this.pageRouter.getPath(Pages.MainPage));
  }

  back(){
    this.router.navigateByUrl(this.previusUrl);
  }
}

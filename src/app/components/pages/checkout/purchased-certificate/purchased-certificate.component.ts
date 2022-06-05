import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Certificate } from 'src/app/entities/certificate';
import { formatString, PageRouter, Pages } from 'src/app/utils/pageRouter';
import { LocalShoppingCartService } from 'src/app/services/shopping-cart-service.service';

@Component({
  selector: 'app-purchased-certificate',
  templateUrl: './purchased-certificate.component.html',
  styleUrls: ['./purchased-certificate.component.scss']
})
export class PurchasedCertificateComponent implements OnInit {

  @Input("certificate") certificate! : Certificate;

  constructor( private router : Router, 
    private pageRouter : PageRouter, 
    private shoppingCar : LocalShoppingCartService) {}

  ngOnInit(): void {}

  toItemDetails(): void{
    if(this.certificate.id === undefined){
      return
    }else{
    this.router.navigateByUrl(
      formatString(this.pageRouter.getPath(Pages.CertificateDetailsPage),[this.certificate.id.toString()]));
    }
  }

  remove(): void{
    if(this.certificate.id != undefined){
      this.shoppingCar.removeCertificate(this.certificate.id);
    }
  }
}

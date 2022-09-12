import { Component, OnInit, Input, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { Certificate } from 'src/app/entities/certificate';
import { formatString, PageRouter, Pages } from 'src/app/utils/pageRouter';
import { LocalShoppingCartService } from '../../../../services/shopping-cart-service.service';

@Component({
  selector: 'app-certificate-preview',
  templateUrl: './certificate-preview.component.html',
  styleUrls: ['./certificate-preview.component.scss']
})
export class CertificatePreviewComponent implements OnInit {
  
  @Input("certificate") certificate! : Certificate;

  static height : number | undefined = undefined;
  static width : number | undefined = undefined;

  constructor(private elementRef : ElementRef, 
    private router : Router,
    private pageRouter : PageRouter,
    private shoppingCar : LocalShoppingCartService) {}

  ngOnInit(): void {

    if(CertificatePreviewComponent.height === undefined){
      CertificatePreviewComponent.height = this.elementRef.nativeElement.clientHeight;
    }

    if(CertificatePreviewComponent.width === undefined){
      CertificatePreviewComponent.width = this.elementRef.nativeElement.clientWidth;
    }
  }

  toItemDetails(): void{
    if(this.certificate.id === undefined){
      return
    }else{
    this.router.navigateByUrl(
      formatString(this.pageRouter.getPath(Pages.CertificateDetailsPage),[this.certificate.id.toString()]));
    }
  }

  addToCart():void{
    this.shoppingCar.addCerificate(this.certificate);
  }
}

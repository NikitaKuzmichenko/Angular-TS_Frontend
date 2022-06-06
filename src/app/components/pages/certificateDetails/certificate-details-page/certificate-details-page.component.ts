import { Certificate } from '../../../../entities/certificate';
import { CertificateService } from '../../../../services/certificate-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalShoppingCartService } from 'src/app/services/shopping-cart-service.service';
import { PageRouter, Pages } from 'src/app/utils/pageRouter';

@Component({
  selector: 'app-certificate-details-page',
  templateUrl: './certificate-details-page.component.html',
  styleUrls: ['./certificate-details-page.component.scss']
})
export class CertificateDetailsPageComponent implements OnInit {

  certificate!: Certificate;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private pageRouter: PageRouter,
    private certificateService: CertificateService,
    private shoppingCar: LocalShoppingCartService) {
    let idParam = this.route.snapshot.paramMap.get('id');
    if (idParam === null) {
      return;
    }

    let subsciption = this.certificateService.getCertificateById(parseInt(idParam)).subscribe(certificates => {
      if (certificates !== undefined) {
        this.certificate = certificates[0];
      }
      subsciption.unsubscribe();
    });
  }

  ngOnInit(): void { }

  addToCart(): void {
    this.shoppingCar.addCerificate(this.certificate);
  }

  toCheckout(): void {
    this.router.navigateByUrl(this.pageRouter.getPath(Pages.CheckoutPage));
  }
}

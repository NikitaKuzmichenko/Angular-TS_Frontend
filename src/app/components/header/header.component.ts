import { PageRouter, Pages } from '../../utils/pageRouter';
import { Router } from '@angular/router';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('sertificate_selector') selector!: ElementRef;

  @Output() categorySelected = new EventEmitter<number>();
  @Output() certificateSelected = new EventEmitter<string>();

  @Input() selectedCategoryId: number = NaN;
  @Input() certificateSelector: string = "";

  private delay = 500;
  private timeOut: NodeJS.Timeout | undefined;

  loguinUrl: string = "";
  registerUrl: string = "";
  checkoutUrl: string = "";
  mainPageUrl: string = "";

  constructor(private elementRef: ElementRef, private router: Router, private pageRouter: PageRouter) {
    this.registerUrl = pageRouter.getPath(Pages.RegisterPage);
    this.loguinUrl = pageRouter.getPath(Pages.LoginPage);
    this.checkoutUrl = pageRouter.getPath(Pages.CheckoutPage);
    this.mainPageUrl = pageRouter.getPath(Pages.MainPage);
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.querySelector('input').value = this.certificateSelector;
  }

  chek(): void {
    if (this.timeOut !== undefined) {
      clearTimeout(this.timeOut);
    }

    this.timeOut = setTimeout(() => {
      this.certificateSelected.emit(this.selector.nativeElement.value);
      this.sendRequest();
    }, this.delay);
  }

  categorySelectedHandler(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.categorySelected.emit(categoryId);
    this.sendRequest();
  }

  private sendRequest() {
    let url: string = this.router.url;

    if (url.indexOf('?') !== -1) {
      url = url.substring(0, url.indexOf('?'));
    }
    url = url.substring(0, url.length - 1)

    if (url !== this.mainPageUrl) {
      console.log("sending");

      this.router.navigateByUrl(this.mainPageUrl + "?categoryId=" + this.selectedCategoryId +
        "&certificateSelector=" + this.selector.nativeElement.value);
    }

  }
}

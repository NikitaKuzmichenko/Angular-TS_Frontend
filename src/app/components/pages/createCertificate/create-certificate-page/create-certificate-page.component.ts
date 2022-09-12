import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorMsgName, ErrorMsgProvider } from 'src/app/utils/errorMsgProvider';
import { PageRouter, Pages } from 'src/app/utils/pageRouter';
import { CertificateService } from '../../../../services/certificate-service.service';
import { DateValidator, PriveValidator } from '../../../../utils/customValidators';
import { Certificate } from '../../../../entities/certificate';


@Component({
  selector: 'app-create-certificate-page',
  templateUrl: './create-certificate-page.component.html',
  styleUrls: ['./create-certificate-page.component.scss']
})

export class CreateCertificatePageComponent implements OnInit {

  private selectedCategoryId: number[] = [];
  private selectedImg: string = "";
  private fileReader: FileReader;

  errorMsg: string = "";

  submit_form = new FormGroup({
    copany: new FormControl('', [Validators.required, Validators.minLength(1)]),
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    expiration_date: new FormControl(this.getCurrentDateAsString(), [Validators.required, DateValidator.isAfterCurrentDate()]),
    price: new FormControl('', [Validators.required, Validators.minLength(1), PriveValidator.isPriveValid()]),
    img: new FormControl('', [Validators.required, Validators.minLength(1)]),
    shord_desc: new FormControl('', [Validators.required, Validators.minLength(1)]),
    long_desc: new FormControl('', [Validators.required, Validators.minLength(1)])
  })

  constructor(private errorMsgProvider: ErrorMsgProvider, private cerificateService: CertificateService,
    private router: Router, private pageRouter: PageRouter) {
    this.fileReader = new FileReader()
    this.fileReader.addEventListener("load", () => {
      let tempStr = this.fileReader.result?.toString();
      if (tempStr != undefined) {
        this.selectedImg = tempStr;
      }
    });
  }

  ngOnInit(): void { }

  categorySelectedHandler(id: number[]): void {
    this.selectedCategoryId = id;
  }

  submitForm(): void {
    if (!this.submit_form.get("price")?.valid) {
      this.errorMsg = this.errorMsgProvider.getErrorByName(ErrorMsgName.BadPriceFormat);
      return;
    }

    if (this.selectedCategoryId.length == 0) {
      this.errorMsg = this.errorMsgProvider.getErrorByName(ErrorMsgName.FormNotFilled);
      return;
    }

    if (!this.submit_form.valid) {
      this.errorMsg = this.errorMsgProvider.getErrorByName(ErrorMsgName.FormNotFilled);
      return;
    }

    const certificate: Certificate = {
      copnany: this.submit_form.get("copany")?.value,
      itemName: this.submit_form.get("name")?.value,
      categoryId: this.selectedCategoryId,
      creationDate: new Date(),
      expirationDate: new Date(this.submit_form.get("expiration_date")?.value),
      price: this.submit_form.get("price")?.value.replace(',', '.'),
      shortDesc: this.submit_form.get("shord_desc")?.value,
      longDesc: this.submit_form.get("long_desc")?.value,
      img: this.selectedImg
    }

    this.errorMsg = "";
    this.cerificateService.createCertificate(certificate);
  }

  back(): void {
    this.errorMsg = "";
    this.router.navigateByUrl(this.pageRouter.getPath(Pages.MainPage));
  }

  onImgUpload(file: any): void {
    let myfile: File = file.target.files[0];
    this.fileReader.readAsDataURL(myfile);
  }

  private getCurrentDateAsString(): string {
    return new Date().toISOString().slice(0, -1);
  }

}

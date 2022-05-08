import { Component, Input, OnInit } from '@angular/core';
import { Certificate } from 'src/app/entities/certificate';

@Component({
  selector: 'app-purchased-certificate',
  templateUrl: './purchased-certificate.component.html',
  styleUrls: ['./purchased-certificate.component.scss']
})
export class PurchasedCertificateComponent implements OnInit {

  @Input("certificate") certificate! : Certificate;

  constructor() {}

  ngOnInit(): void {}

}

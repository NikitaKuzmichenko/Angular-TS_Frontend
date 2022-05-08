import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedCertificateComponent } from './purchased-certificate.component';

describe('PurchasedCertificateComponent', () => {
  let component: PurchasedCertificateComponent;
  let fixture: ComponentFixture<PurchasedCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasedCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Certificate } from '../entities/certificate';
import { CertificateService } from './certificate-service.service';

@Injectable({
  providedIn: 'root'
})

export class LocalShoppingCartService {
  private storageName : string = "purchasedCertificates";

  private purchases : Map<number,Certificate>;
  private subject : Subject<Certificate[]>
  
  constructor(private certificateService : CertificateService) {
    this.purchases = new Map<number,Certificate>();
    this.subject = new Subject<Certificate[]>();
    this.readFromLocalStorage();
  }

  addCerificate(cerificate : Certificate): void{
    if(cerificate.id != undefined){
      this.purchases.set(cerificate.id,cerificate);
      this.writeDataToLocalStorage();
    }
  }

  removeCertificate(id : number): void{
    this.purchases.delete(id);
    this.writeDataToLocalStorage();
    this.subject.next(Array.from(this.purchases.values()));
  }

  getAllCertificates() : Observable<Certificate[]>{
    this.readFromLocalStorage();
    return this.subject;
  }
  
  clerar(): void{
    this.purchases.clear();
    this.writeDataToLocalStorage();
  }

  private readFromLocalStorage(): void{
    let data = localStorage.getItem(this.storageName);
    if(data == null){
      localStorage.setItem(this.storageName,"[]");
    }else{
      let isd : number[] = JSON.parse(data);
      for(let i=0;i<isd.length;i++){

        this.certificateService.getCertificateById(isd[i]).subscribe(certificate => {

          if(certificate[0].id != undefined){
            this.purchases.set(certificate[0].id,certificate[0]);

            if(i == isd.length - 1){
              this.subject.next(Array.from(this.purchases.values()));
            }
          }
          
        })
      }
    }
  }

  private writeDataToLocalStorage(): void{
    localStorage.setItem(this.storageName,JSON.stringify(Array.from(this.purchases.keys()))); 
  }
}

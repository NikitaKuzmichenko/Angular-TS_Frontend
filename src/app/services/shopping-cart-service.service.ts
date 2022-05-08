import { Injectable } from '@angular/core';
import { Certificate } from '../entities/certificate';

@Injectable({
  providedIn: 'root'
})
export class LocalShoppingCartService {

  private purchases : Map<number,Certificate>;
  
  constructor() {
    this.purchases = new Map<number,Certificate>();
  }

  addCerificate(cerificate : Certificate){
    if(cerificate.id !== undefined){
      this.purchases.set(cerificate.id,cerificate);
    }
  }

  getAllCertificates() : Certificate[]{
    return Array.from(this.purchases.values());
  }
  
  clerar(): void{
    this.purchases.clear();
  }
}

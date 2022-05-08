import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certificate } from '../entities/certificate';

const jsonHeader =  new HttpHeaders({
  'Content-Type': 'application/json',
})

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  private apiUrl = 'http://localhost:3000/certificates';
  
  constructor(private http: HttpClient) { }

  getAllWithPagination(limit: number, offset: number,
    categoryId: number | undefined, certificateSelector: string | undefined): Observable<Certificate[]> {
      
    let params : HttpParams = this.getParams(limit,offset,categoryId,certificateSelector);
    return this.http.get<Certificate[]>(this.apiUrl,{params});
  }

  getCertificateById(id : number): Observable<Certificate[]>{
      let params : HttpParams = new HttpParams();
      params = params.set("id",id);
      
      return this.http.get<Certificate[]>(this.apiUrl,{params});
  }

  createCertificate(certiifcate : Certificate) : Observable<Certificate> {
    return this.http.post<Certificate>(this.apiUrl,certiifcate,{headers:jsonHeader});
  }

  private getParams(limit: number, offset: number, 
    categoryId: number | undefined, certificateSelector: string | undefined) : HttpParams {

      let httpGetParams : HttpParams = new HttpParams();
      httpGetParams = httpGetParams.set("_start",offset);
      httpGetParams = httpGetParams.set("_limit",limit);

      if(categoryId !== undefined && !isNaN(categoryId)){
        httpGetParams = httpGetParams.set("categoryId",categoryId);
      }

      if(certificateSelector !== undefined){
        httpGetParams = httpGetParams.set("q",certificateSelector);
      }

      httpGetParams = httpGetParams.set("_sort","creationDate");
      httpGetParams = httpGetParams.set("_order","asc");
      
      return httpGetParams;
  }
}

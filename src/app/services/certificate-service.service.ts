import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Certificate } from '../entities/certificate';
import { toNumber } from 'lodash';

const jsonHeader = new HttpHeaders({
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

    let params: HttpParams = this.getParams(limit, offset, categoryId, certificateSelector);
    return this.http.get<Certificate[]>(this.apiUrl, { params }).pipe(
      map(c => {
        return this.parceCerificates(c);
      }));
  }

  getCertificateById(id: number): Observable<Certificate[]> {
    let params: HttpParams = new HttpParams();
    params = params.set("id", id);

    return this.http.get<Certificate[]>(this.apiUrl, { params }).pipe(
      map(c => {
        return this.parceCerificates(c);
      }));
  }

  createCertificate(certiifcate: Certificate): Observable<Certificate> {
    return this.http.post<Certificate>(this.apiUrl, certiifcate, { headers: jsonHeader });
  }

  private getParams(limit: number, offset: number,
    categoryId: number | undefined, certificateSelector: string | undefined): HttpParams {

    let httpGetParams: HttpParams = new HttpParams();
    httpGetParams = httpGetParams.set("_start", offset);
    httpGetParams = httpGetParams.set("_limit", limit);

    if (categoryId !== undefined && !isNaN(categoryId)) {
      httpGetParams = httpGetParams.set("categoryId_like", categoryId);
    }

    if (certificateSelector !== undefined) {
      httpGetParams = httpGetParams.set("itemName_like", certificateSelector);
    }

    httpGetParams = httpGetParams.set("_sort", "creationDate");
    httpGetParams = httpGetParams.set("_order", "asc");

    return httpGetParams;
  }

  private parceCerificates(certificates: Certificate[]): Certificate[] {
    certificates.forEach(c => {
      c.price = toNumber(c.price);
      c.creationDate = new Date(c.creationDate);
      c.expirationDate = new Date(c.expirationDate);
    })
    return certificates;
  }
}

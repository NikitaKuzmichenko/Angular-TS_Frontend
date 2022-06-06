import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, Subscriber } from 'rxjs';
import { User } from '../entities/user';

const jsonHeader = new HttpHeaders({
  'Content-Type': 'application/json',
})

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, { headers: jsonHeader });
  }

  public getUserByLogin(login: string): Observable<User[]> {
    let httpGetParams: HttpParams = new HttpParams();
    httpGetParams = httpGetParams.set("login", login);

    return this.http.get<User[]>(this.apiUrl, { params: httpGetParams });
  }
}

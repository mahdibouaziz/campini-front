import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  register(
    username: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    dateOfBirthday: Date
  ): Observable<any> {
    return this.http.post(`${url}/signup`, {
      username,
      email,
      password,
      firstName,
      lastName,
      dateOfBirthday,
    });
  }
}

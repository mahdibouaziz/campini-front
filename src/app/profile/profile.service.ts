import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../modal/user';

const link = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient, private router: Router) {}

  getUserInformation(): Observable<any> {
    return this.http.patch(link, {});
  }

  updateUserInformation(user: Partial<User>): void {
    this.http.patch(link, user).subscribe(
      (result) => {},
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate(['']);
  }
}

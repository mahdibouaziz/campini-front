import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const BASE_URL = 'http://localhost:3000/camping';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(BASE_URL);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const BASE_URL = 'http://localhost:3000/camping/all';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private model = 'events';
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(BASE_URL);
  }
}

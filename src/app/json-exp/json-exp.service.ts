import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './modal/post';
import { Product } from './modal/product';

const url = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root',
})
export class JsonExpService {
  private products: Product[] = [
    new Product('name', 20, 'qsdsqdq'),
    new Product('name', 21, 'qsdsqdq'),
    new Product('name', 22, 'qsdsqdq'),
    new Product('name', 23, 'qsdsqdq'),
    new Product('name', 24, 'qsdsqdq'),
    new Product('name', 25, 'qsdsqdq'),
    new Product('name', 26, 'qsdsqdq'),
  ];

  // private post: Post[];

  constructor(private http: HttpClient) {}

  allProducts(): Product[] {
    return this.products;
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(url);
  }
}

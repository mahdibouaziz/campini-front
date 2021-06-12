import { Component, OnInit } from '@angular/core';
import { JsonExpService } from './json-exp.service';
import { Post } from './modal/post';
import { Product } from './modal/product';

@Component({
  selector: 'app-json-exp',
  templateUrl: './json-exp.component.html',
  styleUrls: ['./json-exp.component.css'],
})
export class JsonExpComponent implements OnInit {
  products: Product[];
  posts: Post[];

  constructor(private jsonExpService: JsonExpService) {}

  ngOnInit(): void {
    this.allProducts();
    this.getPosts();
  }

  allProducts(): void {
    this.products = this.jsonExpService.allProducts();
  }

  getPosts(): void {
    this.jsonExpService.getPosts().subscribe(
      (data) => {
        this.posts = data;
        // console.log('data:', data);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }
}

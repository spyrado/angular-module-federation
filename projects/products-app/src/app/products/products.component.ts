import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getAll()
      .subscribe((products) => console.log(products));
  }
}

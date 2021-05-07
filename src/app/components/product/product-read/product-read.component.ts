import { ProductService } from './../product.service';
import { Product } from './../../../models/products.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private http: HttpClient, private productService: ProductService) { }

  ngOnInit(): void {
    this.buscarProdutos()
  }

  buscarProdutos(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
      console.log(products);
    })
  }

}

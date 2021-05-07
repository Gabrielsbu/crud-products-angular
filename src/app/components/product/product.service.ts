import { Product } from './../../models/products.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackbar: MatSnackBar, private httpCliente: HttpClient) { }

  showMessage(message: string): void {
    this.snackbar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product> {
    return this.httpCliente.post<Product>(this.baseUrl, product)
  }

  read(): Observable<Product[]> {
    return this.httpCliente.get<Product[]>(this.baseUrl)
  }

  readById(id: string | null): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.httpCliente.get<Product>(url)
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.httpCliente.put<Product>(url, product)
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.httpCliente.delete<Product>(url)
  }


}

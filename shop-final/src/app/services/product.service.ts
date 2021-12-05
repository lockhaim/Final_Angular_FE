import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders
 } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Product';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = 'http://localhost:8000/api/products'

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiURL)
  }

  deleteProduct(product:Product): Observable<Product> {
      const url =`${this.apiURL}/${product.id}`;
      return this.http.delete<Product>(url);
  }

  addProduct(product:Product): Observable<Product> {
      return this.http.post<Product>(this.apiURL, product);
  }

}

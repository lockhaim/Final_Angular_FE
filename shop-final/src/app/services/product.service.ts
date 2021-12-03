import { Injectable } from '@angular/core';
import {Product} from '../Product'
import {PRODUCTS} from '../mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
      return PRODUCTS;
  }
}

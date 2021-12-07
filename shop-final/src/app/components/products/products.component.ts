import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service'
import {Product} from '../../Product'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
      this.productService.getProducts().subscribe((products) => this.products = products);
  }

  deleteProduct(product: Product){
      this.productService
        .deleteProduct(product)
        .subscribe(
            () => this.products = this.products.filter( p=> p.id !== product.id));
  }

  updateProduct(product: Product){
      this.productService
        .updateProduct(product)
        .subscribe(
            (products) => products = products);
  }

  addProduct(product: Product){
      this.productService.addProduct(product).subscribe((product) => this.products.push(product));
  }
}

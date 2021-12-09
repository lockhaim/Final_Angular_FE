import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../Product'



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() 'product': Product
  @Output() 'onDeleteProduct': EventEmitter<Product> = new EventEmitter()
  @Output() 'onUpdateProduct': EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateProduct(): void {

      const updatedProduct = {
          name: this.product.name,
          quantity: this.product.quantity,
          price: this.product.price,
          description: this.product.description,
          image: this.product.image,
      }
      this.onUpdateProduct.emit(updatedProduct)
      console.log(this.product)
  }

  onDelete(): void {
      this.onDeleteProduct.emit(this.product)
      console.log(this.product)
  }

}

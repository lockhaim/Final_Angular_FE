import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Product} from '../../Product'


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @Output() onAddProduct: EventEmitter<Product> = new EventEmitter();


  'name': string;
  'quantity': number;
  'price': number;
  'description': string;
  'image': string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
      if(!this.name) {
          alert('Please add a product!')
          return
      }

      const newProduct = {
          name: this.name,
          quantity: this.quantity,
          price: this.price,
          description: this.description,
          image: this.image,
      }

      this.onAddProduct.emit(newProduct)
      //@todo emit products
      this.name = '';
      this.quantity = 0;
      this.price = 0;
      this.description = '';
      this.image = '';


  }
}

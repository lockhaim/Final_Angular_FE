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

  constructor() { }

  ngOnInit(): void {
  }


  onDelete(): void {
      this.onDeleteProduct.emit(this.product)
      console.log(this.product)
  }

}

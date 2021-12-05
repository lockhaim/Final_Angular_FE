import { Component, OnInit } from '@angular/core';
import { ToggleAddService } from '../../services/toggle-add.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Products Delivered Straight To You!';
  'showAddProduct': boolean = true;
  'subscription': Subscription;


  constructor(private toggleAddService:ToggleAddService) {
      this.subscription = this.toggleAddService
        .onToggle()
        .subscribe(value => this.showAddProduct = value)
  }

  ngOnInit(): void {
  }

  toggleAddItem(){
      this.toggleAddService.toggleAddService()
  }
}

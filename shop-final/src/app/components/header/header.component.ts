import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Products Delivered Straight To You!';
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddItem(){
      console.log('toggle')
  }
}

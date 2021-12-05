import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToggleAddService {

  private showAddProduct: boolean = false;
  private subject = new Subject<any>();


  constructor() { }

  toggleAddService(): void {
      console.log('Clicked yes!')
      this.showAddProduct = !this.showAddProduct;
      this.subject.next(this.showAddProduct);
  }

  onToggle(): Observable<any> {
      return this.subject.asObservable();
  }

}

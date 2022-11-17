import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  sort = 'elegir';

  onSortUpdated(newSort: string): void {
    this.sort= newSort;

  }

}

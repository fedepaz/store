import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'elegir';
  itemsShowCount = 12;

  ngOnInit(): void { };

  onSortUpdated(newSort: string): void {
    this.sort = newSort;

  }
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnUpdates(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

}

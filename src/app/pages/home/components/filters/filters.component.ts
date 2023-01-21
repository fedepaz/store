import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent implements OnInit, OnDestroy {


  @Output() showCategory = new EventEmitter<string>();
  categoriesSubscription: Subscription | undefined;
  categories: Array<string> | undefined;


  constructor(private storeService: StoreService) { };

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getAllCategories()
      .subscribe((_categories) => { this.categories = _categories, console.log(this.categories) });
  }

  onShowCategory(cat: string): void {
    this.showCategory.emit(cat)
  }



  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }

  }

}

import { Category } from '../../entities/category';
import { CategoryService } from '../../services/category-service.service';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport, ScrollDispatcher } from "@angular/cdk/scrolling";

@Component({
  selector: 'app-categories-dropdown',
  templateUrl: './categories-dropdown.component.html',
  styleUrls: ['./categories-dropdown.component.scss'],
})

export class CategoriesDropdownComponent implements OnInit {

  @Input("currentValue") selectedCategoryId: number | undefined = NaN;
  @Input() height: number = 50;
  @Input() width: number = 200;
  @Input() scrollSize: number = 5;

  @Output() categorySelected = new EventEmitter<number>();

  defaultCategory: Category;
  categoryList: Category[] = [];
  selectedPosition: number = 0;

  @ViewChild(CdkVirtualScrollViewport, { static: true }) cdkVirtualScrollViewPort: CdkVirtualScrollViewport | undefined;

  constructor(private certificateService: CategoryService, readonly sd: ScrollDispatcher) {
    this.defaultCategory = {
      id: NaN,
      name: "All Categoreis",
      img: ""
    }
  }

  ngOnInit(): void {
    this.certificateService.getAll().subscribe(categories => {
      this.categoryList = this.categoryList.concat(this.defaultCategory).concat(categories);
      this.displaySelected();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.displaySelected();
  }

  openChange($event: boolean): void {
    if ($event) {
      this.cdkVirtualScrollViewPort?.checkViewportSize();
    }
  }

  onSelectionChange(change: any): void {
    if (!change.isUserInput) {
      return;
    }

    this.selectedPosition = change.source.value;
    this.selectedCategoryId = this.categoryList[this.selectedPosition].id;
    this.categorySelected.emit(this.selectedCategoryId);
  }

  private displaySelected(): void {
    for (let i = 0; i < this.categoryList.length; i++) {
      if (this.categoryList[i].id == this.selectedCategoryId) {
        this.selectedPosition = i;
        break;
      }
    }
  }
}

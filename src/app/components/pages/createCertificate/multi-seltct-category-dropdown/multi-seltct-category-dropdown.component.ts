import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport, ScrollDispatcher } from "@angular/cdk/scrolling";
import { Category } from 'src/app/entities/category';
import { CategoryService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-multi-seltct-category-dropdown',
  templateUrl: './multi-seltct-category-dropdown.component.html',
  styleUrls: ['./multi-seltct-category-dropdown.component.scss']
})

export class MultiSeltctCategoryDropdownComponent implements OnInit {

  @Input() placeholder: string = "select categories";
  @Input() height: number = 50;
  @Input() width: number = 260;
  @Input() scrollSize: number = 5;

  @Output() categorySelected = new EventEmitter<number[]>();

  categoryList: Category[] = [];
  selected: number[] = [];

  @ViewChild(CdkVirtualScrollViewport, { static: true })
  cdkVirtualScrollViewPort: CdkVirtualScrollViewport | undefined;;

  constructor(private certificateService: CategoryService, readonly sd: ScrollDispatcher) { }

  ngOnInit(): void {
    this.certificateService.getAll().subscribe(categories => {
      this.categoryList = categories;
    });
  }

  ngAfterViewInit(): void { }

  openChange($event: boolean): void {
    if ($event) {
      this.cdkVirtualScrollViewPort?.scrollToIndex(0);
      this.cdkVirtualScrollViewPort?.checkViewportSize();
    }
  }

  onSelectionChange(change: any): void {
    if (!change.isUserInput) {
      return;
    }

    const value = change.source.value;
    const index = this.selected.indexOf(change.source.value);

    if (index > -1) {
      this.selected.splice(index, 1);
    } else {
      this.selected.push(value);
    }
    this.categorySelected.emit(this.selected);
  }

}

import { Category } from '../../../../entities/category';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.scss']
})
export class CategoryPreviewComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<number>();

  @Input("category") caregory!: Category;

  constructor() { }

  ngOnInit(): void { }

  clicked(): void {
    this.categorySelected.emit(this.caregory.id);
  }
}

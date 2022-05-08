import { Category } from '../../../../entities/category';
import { CategoryService } from '../../../../services/category-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories-preview',
  templateUrl: './categories-preview.component.html',
  styleUrls: ['./categories-preview.component.scss']
})
export class CategoriesPreviewComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<number>();

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(categories => this.categories = categories);
  }

  categorySelectedHandler(id: number): void {
    this.categorySelected.emit(id);
  }
}

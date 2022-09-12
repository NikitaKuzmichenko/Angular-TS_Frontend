import { Category } from '../../../../entities/category';
import { CategoryService } from '../../../../services/category-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-categories-preview',
  templateUrl: './categories-preview.component.html',
  styleUrls: ['./categories-preview.component.scss']
})
export class CategoriesPreviewComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<number>();

  categories: Observable<Category[]> | undefined;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getAll();
  }

  categorySelectedHandler(id: number): void {
    this.categorySelected.emit(id);
  }
}

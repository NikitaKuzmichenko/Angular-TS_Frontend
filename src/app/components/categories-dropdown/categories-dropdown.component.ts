import { Category } from '../../entities/category';
import { CategoryService } from '../../services/category-service.service';
import { Component, OnInit, ViewChild, ElementRef, Input, Inject, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-categories-dropdown',
  templateUrl: './categories-dropdown.component.html',
  styleUrls: ['./categories-dropdown.component.scss']
})
export class CategoriesDropdownComponent implements OnInit {

  @ViewChild('drop_down_categories_container') dropdown!: ElementRef;

  @Input("name") public optionName!: string;
  @Input("value") public optionValue!: string;
  @Input("attributes") public optionAttributes!: string[];
  @Input("currentValue") public currentValue: number = NaN;
  private initValueSet : boolean = false;

  @Output() categorySelected = new EventEmitter<number>();

  categories: Category[] = [];

  private maxSieze: number = 5;
  private minSieze: number = 1;

  constructor(
    private elementRef: ElementRef,
    private certificateService: CategoryService,
    @Inject(DOCUMENT) private document: Document) {
    }

  ngOnInit(): void {
    if (!(this.optionName === undefined && this.optionValue === undefined)) {

      const option = this.document.createElement('option');
      if (this.optionValue !== undefined) {
        option.value = this.optionValue;
      }
      if (this.optionName !== undefined) {
        option.innerText = this.optionName;
      }
      if (this.optionAttributes !== undefined) {
        for (let i = 0; i < this.optionAttributes.length; i++) {
          option.setAttribute(this.optionAttributes[i], "true");
        }
      }

      this.elementRef.nativeElement.querySelector('select').prepend(option);
      this.certificateService.getAll().subscribe(categories => {
        this.categories = categories;
        this.initValueSet = true;
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setCategory(this.currentValue, this.elementRef.nativeElement.querySelector('select'));
  }

  ngAfterViewChecked(){
    if(this.initValueSet){
      this.setCategory(this.currentValue, this.elementRef.nativeElement.querySelector('select'));
      this.initValueSet = false;
    }
  }

  private setCategory(value: number, element: any) : boolean{
    for (let i = 0; i < element.options.length; i++) {
      if (element.options[i].value == value) {
        element.selectedIndex = i;
        return true;
      }
    }
    return false
  }

  expand(): void {
    if (this.categories.length < this.maxSieze) {
      this.dropdown.nativeElement.size = this.categories.length;
    }
    else {
      this.dropdown.nativeElement.size = this.maxSieze;
    }
  }

  shrink(): void {
    this.dropdown.nativeElement.size = this.minSieze;
  }

  blur(): void {
    this.dropdown.nativeElement.size = this.minSieze;
    this.dropdown.nativeElement.blur();
  }

  selected(): void {
    const element = this.dropdown.nativeElement
    const id = element.options[element.selectedIndex].value
    this.categorySelected.emit(id);
  }
}

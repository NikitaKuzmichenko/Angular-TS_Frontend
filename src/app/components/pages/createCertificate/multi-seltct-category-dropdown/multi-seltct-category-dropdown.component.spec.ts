import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSeltctCategoryDropdownComponent } from './multi-seltct-category-dropdown.component';

describe('MultiSeltctCategoryDropdownComponent', () => {
  let component: MultiSeltctCategoryDropdownComponent;
  let fixture: ComponentFixture<MultiSeltctCategoryDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSeltctCategoryDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSeltctCategoryDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

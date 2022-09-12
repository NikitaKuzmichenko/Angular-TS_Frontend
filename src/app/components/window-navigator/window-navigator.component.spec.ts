import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowNavigatorComponent } from './window-navigator.component';

describe('WindowNavigatorComponent', () => {
  let component: WindowNavigatorComponent;
  let fixture: ComponentFixture<WindowNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

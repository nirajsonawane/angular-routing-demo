import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentListDisplayComponent } from './department-list-display.component';

describe('DepartmentListDisplayComponent', () => {
  let component: DepartmentListDisplayComponent;
  let fixture: ComponentFixture<DepartmentListDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentListDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

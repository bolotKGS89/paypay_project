import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDataDialogComponent } from './employee-data-dialog.component';

describe('EmployeeDataDialogComponent', () => {
  let component: EmployeeDataDialogComponent;
  let fixture: ComponentFixture<EmployeeDataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

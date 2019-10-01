import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-employee-data-dialog',
  templateUrl: './employee-data-dialog.component.html',
  styleUrls: ['./employee-data-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeDataDialogComponent implements OnInit {
  public employeeDialogForm: FormGroup;
  public buttonName;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
              public dialogRef: MatDialogRef<EmployeeDataDialogComponent>,
              private formBuilder: FormBuilder) {
    this.employeeDialogForm = this.formBuilder.group({
      employeeName: [{ value: null, disabled: false }, [Validators.required]],
      jobPosition: [{ value: null, disabled: false }, [Validators.required]],
      experience: [{ value: null, disabled: false }, [Validators.pattern, Validators.pattern('^[0-9]*$')]],
      nationality: [{ value: null, disabled: false }, [Validators.required]]
    });
  }

  ngOnInit() {
    this.buttonName = this.dialogData.button;
  }

}

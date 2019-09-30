import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-performance-review-dialog',
  templateUrl: './performance-review-dialog.component.html',
  styleUrls: ['./performance-review-dialog.component.scss']
})
export class PerformanceReviewDialogComponent implements OnInit {
  public performanceDialogForm: FormGroup;
  public buttonName;


  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
              public dialogRef: MatDialogRef<PerformanceReviewDialogComponent>,
              private formBuilder: FormBuilder) {
    this.performanceDialogForm = this.formBuilder.group({
        grade: [{ value: null, disabled: false }, [Validators.required, Validators.pattern('^[0-9]*$')]],
        date: [{ value: null, disabled: false }, [Validators.required]],
        comment: [{ value: null, disabled: false }, [Validators.required]]
  }); }

  ngOnInit() {
    this.buttonName = this.dialogData.button;
  }

}

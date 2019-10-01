import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Comment} from '../../enum/Comment';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss']
})
export class FeedbackDialogComponent implements OnInit {
  public feedbackDialogForm: FormGroup;
  public buttonName;
  public commentArray: string[];

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
              public dialogRef: MatDialogRef<FeedbackDialogComponent>,
              private formBuilder: FormBuilder) {
    }

  ngOnInit() {
    this.feedbackDialogForm = this.formBuilder.group({
      employeeName: [{ value: null, disabled: false }, [Validators.required]],
      comment: [{ value: null, disabled: false }, [Validators.required]],
      feedback: [{ value: null, disabled: false }, [Validators.pattern]]
    });
    this.commentArray = [Comment.BAD, Comment.INEXPERIENCED, Comment.NOT_BAD, Comment.WELL_DONE];

    this.buttonName = this.dialogData.button;
  }

}

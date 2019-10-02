import {Component, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Comment} from '../../enum/Comment';
import {HttpService} from '../../services/http.service';
import {ToastrService} from 'ngx-toastr';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackDialogComponent implements OnInit, OnDestroy {
  public feedbackDialogForm: FormGroup;
  public buttonName;
  public commentArray: string[] =
    [Comment.BAD, Comment.INEXPERIENCED, Comment.NOT_BAD, Comment.WELL_DONE];

  private httpRequest: Subscription;
  private name: string;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
              private formBuilder: FormBuilder,
              public httpService: HttpService,
              private toastrService: ToastrService) {
    }

  ngOnInit() {
    this.feedbackDialogForm = this.formBuilder.group({
      comment: [{ value: null, disabled: false }, [Validators.required]],
      feedback: [{ value: null, disabled: false }, [Validators.pattern]]
    });
    this.buttonName = this.dialogData.button;
  }

  public submit() {
    this.httpRequest = this.httpService.saveFeedback(this.feedbackDialogForm.value)
      .subscribe((data) => this.toastrService.success(`Feedback on ${data} successfully saved`),
        (error) => this.toastrService.error(error));
  }

  ngOnDestroy(): void {
    if (this.httpRequest) {this.httpRequest.unsubscribe()}
  }

}

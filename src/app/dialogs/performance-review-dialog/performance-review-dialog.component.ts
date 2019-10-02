import {Component, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Comment} from '../../enum/Comment';
import {Subscription} from 'rxjs';
import {HttpService} from '../../services/http.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-performance-review-dialog',
  templateUrl: './performance-review-dialog.component.html',
  styleUrls: ['./performance-review-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PerformanceReviewDialogComponent implements OnInit, OnDestroy {
  public performanceDialogForm: FormGroup;
  public buttonName;
  public commentArray: string[] = [Comment.BAD, Comment.INEXPERIENCED, Comment.NOT_BAD, Comment.WELL_DONE];

  private httpRequest: Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
              public dialogRef: MatDialogRef<PerformanceReviewDialogComponent>,
              private formBuilder: FormBuilder,
              private httpService: HttpService,
              private toastr: ToastrService) {
    this.performanceDialogForm = this.formBuilder.group({
        grade: [{ value: null, disabled: false }, [Validators.required, Validators.pattern('^[0-9]*$')]],
        date: [{ value: null, disabled: false }, [Validators.required]],
        employeeName: [{ value: null, disabled: false }, [Validators.required]],
        comment: [{ value: null, disabled: false }]
  }); }

  ngOnInit() {
    this.buttonName = this.dialogData.button;
    if (this.dialogData.performance) {
      this.performanceDialogForm.controls.grade.patchValue(this.dialogData.performance.grade);
      this.performanceDialogForm.controls.date.patchValue(this.dialogData.performance.date);
      this.performanceDialogForm.controls.employeeName.patchValue(this.dialogData.performance.employeeName);
    }
  }

  public sendData(): void {
    if (this.dialogData.performance == null) {
      this.httpRequest = this.httpService.addPerformance(this.performanceDialogForm.value).subscribe((data) => {
        this.toastr.success(`Performance of  ${data} saved`);
      }, (error) => {
        this.toastr.error(error);
      });
    } else {
      this.performanceDialogForm.value.id = this.dialogData.performance.id;
      this.httpRequest = this.httpService.updatePerformance(this.performanceDialogForm.value).subscribe((data) => {
        this.toastr.success(`Performance of ${data} updated`);
      }, (error) => {
        this.toastr.error(error);
      });
    }

  }

  ngOnDestroy(): void {
    if (this.httpRequest) { this.httpRequest.unsubscribe(); }
  }

}

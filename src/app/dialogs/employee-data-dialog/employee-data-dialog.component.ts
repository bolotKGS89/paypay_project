import {Component, Inject, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { HttpService } from 'src/app/services/http.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-data-dialog',
  templateUrl: './employee-data-dialog.component.html',
  styleUrls: ['./employee-data-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeDataDialogComponent implements OnInit, OnDestroy {
  public employeeDialogForm: FormGroup;
  public buttonName;

  private httpRequest: Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
              public dialogRef: MatDialogRef<EmployeeDataDialogComponent>,
              private formBuilder: FormBuilder,
              private httpService: HttpService, 
              private toastr: ToastrService) {
    this.employeeDialogForm = this.formBuilder.group({
      name: [{ value: null, disabled: false }, [Validators.required]],
      position: [{ value: null, disabled: false }, [Validators.required]],
      experience: [{ value: null, disabled: false }, [Validators.pattern, Validators.pattern('^[0-9]*$')]],
      nationality: [{ value: null, disabled: false }, [Validators.required]]
    });
  }

  ngOnInit() {
    this.buttonName = this.dialogData.button;
  }

  public sendData(): void {
    if(this.dialogData.id) {
      this.employeeDialogForm.value.id = this.dialogData.id;
      this.httpRequest = this.httpService.updateEmployee(this.employeeDialogForm.value).subscribe((data) => {
        this.toastr.success(`Employee ${data} saved`);
      }, (error) => {
        this.toastr.error(error);
      });
    } else {
      this.httpRequest = this.httpService.addEmployee(this.employeeDialogForm.value).subscribe((data) => {
          this.toastr.success(`Employee ${data} saved`);
      }, (error) => {
        this.toastr.error(error);
      });
    }
  }

  ngOnDestroy(): void {
    if(this.httpRequest) this.httpRequest.unsubscribe();
  }

}

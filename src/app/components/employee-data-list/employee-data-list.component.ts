import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {EmployeeDataDialogComponent} from '../../dialogs/employee-data-dialog/employee-data-dialog.component';
import {HttpService} from '../../services/http.service';
import {Subscription} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {Employee} from '../../interface/Employee';

@Component({
  selector: 'app-employee-data-list',
  templateUrl: './employee-data-list.component.html',
  styleUrls: ['./employee-data-list.component.scss']
})
export class EmployeeDataListComponent implements OnInit, OnDestroy {

  private employeeSubscription: Subscription;

  public displayedColumns: string[] = ['name', 'position', 'experience', 'nationality', 'actions'];
  public dataSource;

  constructor(private toastrService: ToastrService,
              private dialog: MatDialog,
              public httpService: HttpService
            ) { }

  ngOnInit() {
    this.employeeSubscription = this.httpService.getEmployees().subscribe((data) => {
      this.dataSource = data;
    }, (error => this.toastrService.error(error)));
  }

  public deleteData(id: number) {
    this.employeeSubscription = this.httpService.deleteEmployee(id).subscribe((data) => {
      this.toastrService.success(`Employee ${data} successfully removed`);
    }, (error) => {
      this.toastrService.error(`Error: ${error}`);
    });
  }

  public openDialog(buttonArg: string, employee: Employee = null): void {
    this.dialog.open(EmployeeDataDialogComponent, {
      height: '50vh',
      width: '30vw',
      data: {
        button: buttonArg,
        employee: employee
      }
    });
  }

  ngOnDestroy(): void {
    if (this.employeeSubscription) { this.employeeSubscription.unsubscribe() }
  }

}

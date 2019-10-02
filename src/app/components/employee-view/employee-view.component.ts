import {Component, OnDestroy, OnInit} from '@angular/core';
import {FeedbackDialogComponent} from '../../dialogs/feedback-dialog/feedback-dialog.component';
import {MatDialog} from '@angular/material';
import {HttpService} from '../../services/http.service';
import {Subscription} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit, OnDestroy {

  // private static readonly FEEDBACK_LIST:
  //   Array<{name: string}>
  //   = [
  //   {name: 'Jon Jones' },
  //   {name: 'Jacques Audiard'},
  //   {name: 'Sergey Ivanov'},
  //   {name: 'Carlos Saucedo'},
  //   {name: 'Thomas Wurz'}
  // ];

  public displayedColumns: string[];
  public dataSource;

  private httpRequest: Subscription;

  constructor(private dialog: MatDialog,
              public httpService: HttpService,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.displayedColumns = ['name', 'actions'];
    this.httpRequest = this.httpService.getFeedback().subscribe((data) => {
      this.dataSource = data;
    }, (error => this.toastrService.error(error)));
  }

  openDialog(buttonArg: string): void {
    this.dialog.open(FeedbackDialogComponent, {
      height: '50vh',
      width: '30vw',
      data: {
        button: buttonArg
      }
    });
  }

  ngOnDestroy(): void {
      if (this.httpRequest) {this.httpRequest.unsubscribe()}
  }
}

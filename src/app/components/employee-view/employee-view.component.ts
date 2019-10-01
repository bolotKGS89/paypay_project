import { Component, OnInit } from '@angular/core';
import {FeedbackDialogComponent} from '../../dialogs/feedback-dialog/feedback-dialog.component';
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit {

  private static readonly FEEDBACK_LIST:
    Array<{name: string}>
    = [
    {name: 'Jon Jones' },
    {name: 'Jacques Audiard'},
    {name: 'Sergey Ivanov'},
    {name: 'Carlos Saucedo'},
    {name: 'Thomas Wurz'}
  ];

  public displayedColumns: string[];
  public dataSource;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.displayedColumns = ['name', 'actions'];
    this.dataSource = EmployeeViewComponent.FEEDBACK_LIST;
  }

  openDialog(buttonArg: string): void {
    const openDialog = this.dialog.open(FeedbackDialogComponent, {
      height: '50vh',
      width: '30vw',
      data: {
        button: buttonArg
      }
    });

    openDialog.afterClosed().subscribe((data) => {

    });
  }
}

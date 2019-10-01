import { Component, OnInit } from '@angular/core';
import {PerformanceReviewDialogComponent} from '../../dialogs/performance-review-dialog/performance-review-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-performance-review-list',
  templateUrl: './performance-review-list.component.html',
  styleUrls: ['./performance-review-list.component.scss']
})
export class PerformanceReviewListComponent implements OnInit {
  private static readonly REVIEW_LIST:
    Array<{grade: number, date: string, employeeName: string, comment: string}>
    = [
    {grade: 3, date: new Date().toDateString(), employeeName: 'Jon Jones', comment: 'Inexperienced'},
    {grade: 6, date: new Date().toDateString(), employeeName: 'Jacques Audiard', comment: 'Not Bad!!'},
    {grade: 7, date: new Date().toDateString(), employeeName: 'Sergey Ivanov', comment: 'Not Bad!!'},
    {grade: 10, date: new Date().toDateString(), employeeName: 'Carlos Saucedo', comment: 'Well done!!'},
    {grade: 6, date: new Date().toDateString(), employeeName: 'Thomas Wurz', comment: 'Not Bad!!'}
  ];

  public displayedColumns: string[];
  public dataSource;


  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.displayedColumns = ['grade', 'date', 'employee', 'comment', 'actions'];
    this.dataSource = PerformanceReviewListComponent.REVIEW_LIST;
  }

  openDialog(buttonArg: string): void {
    const openDialog = this.dialog.open(PerformanceReviewDialogComponent, {
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

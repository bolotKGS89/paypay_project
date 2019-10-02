import {Component, OnDestroy, OnInit} from '@angular/core';
import {PerformanceReviewDialogComponent} from '../../dialogs/performance-review-dialog/performance-review-dialog.component';
import {MatDialog} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {HttpService} from '../../services/http.service';
import {Subscription} from 'rxjs';
import {Performance} from '../../interface/Performance';

@Component({
  selector: 'app-performance-review-list',
  templateUrl: './performance-review-list.component.html',
  styleUrls: ['./performance-review-list.component.scss']
})
export class PerformanceReviewListComponent implements OnInit, OnDestroy {


  public displayedColumns: string[] = ['grade', 'date', 'employee', 'comment', 'actions'];
  public dataSource;

  private performanceSubscription: Subscription;


  constructor(private toastrService: ToastrService,
              private dialog: MatDialog,
              public httpService: HttpService) { }

  ngOnInit() {
    this.performanceSubscription = this.httpService.getPerformance().subscribe((data) => {
      this.dataSource = data;
    }, (error => this.toastrService.error(error)));
  }

  openDialog(buttonArg: string, performance: Performance = null): void {
    this.dialog.open(PerformanceReviewDialogComponent, {
      height: '50vh',
      width: '30vw',
      data: {
        button: buttonArg,
        performance: performance
      }
    });
  }

  ngOnDestroy(): void {
  }

}

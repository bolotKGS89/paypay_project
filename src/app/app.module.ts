import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SimpleNotificationsModule } from 'angular2-notifications';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { EmployeeDataListComponent } from './components/employee-data-list/employee-data-list.component';
import { PerformanceReviewListComponent } from './components/performance-review-list/performance-review-list.component';
import {MatTableModule} from '@angular/material/table';
import { EmployeeDataDialogComponent } from './dialogs/employee-data-dialog/employee-data-dialog.component';
import { PerformanceReviewDialogComponent } from './dialogs/performance-review-dialog/performance-review-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    AdminViewComponent,
    EmployeeViewComponent,
    MainMenuComponent,
    EmployeeDataListComponent,
    PerformanceReviewListComponent,
    EmployeeDataDialogComponent,
    PerformanceReviewDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    RouterModule,
    FlexLayoutModule,
    NgScrollbarModule,
    MatDialogModule,
    SimpleNotificationsModule.forRoot(),
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  entryComponents: [
    EmployeeDataDialogComponent,
    PerformanceReviewDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

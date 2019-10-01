import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminViewComponent} from './components/admin-view/admin-view.component';
import {EmployeeViewComponent} from './components/employee-view/employee-view.component';


const appRoutes: Routes = [
  { path: 'admin-view',
    component: AdminViewComponent
  },
  {
    path: 'employee-view',
    component: EmployeeViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

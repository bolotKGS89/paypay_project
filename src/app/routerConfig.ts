import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import {Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'admin-view',
    component: AdminViewComponent
  },
  {
    path: 'employee-view',
    component: EmployeeViewComponent
  }
];
export default appRoutes;

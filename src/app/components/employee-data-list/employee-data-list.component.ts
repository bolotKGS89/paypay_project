import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {EmployeeDataDialogComponent} from '../../dialogs/employee-data-dialog/employee-data-dialog.component';

@Component({
  selector: 'app-employee-data-list',
  templateUrl: './employee-data-list.component.html',
  styleUrls: ['./employee-data-list.component.scss']
})
export class EmployeeDataListComponent implements OnInit {
  private static readonly EMPLOYEE_LIST:
    Array<{name: string, position: string, experience: number, nationality: string}>
    = [
    {name: 'Jon Jones', position: 'Developer', experience: 2, nationality: 'USA'},
    {name: 'Jacques Audiard', position: 'Tester', experience: 2, nationality: 'FR'},
    {name: 'Sergey Ivanov', position: 'Project Manager', experience: 5, nationality: 'RU'},
    {name: 'Carlos Saucedo', position: 'Scrum Master', experience: 1, nationality: 'ES'},
    {name: 'Thomas Wurz', position: 'Product owner', experience: 6, nationality: 'DE'}
  ];


  public displayedColumns: string[];
  public dataSource;


  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.displayedColumns = ['name', 'position', 'experience', 'nationality', 'actions'];
    this.dataSource = EmployeeDataListComponent.EMPLOYEE_LIST;
  }

  public openDialog(buttonArg: string): void {
    const openDialog = this.dialog.open(EmployeeDataDialogComponent, {
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

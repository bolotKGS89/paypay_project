import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Employee} from '../interface/Employee';
import {Performance} from '../interface/Performance'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public getEmployees() {
    console.log(`${environment.server}${environment.employees}`);
    return this.httpClient.get(`${environment.server}${environment.employees}`);
  }

  public deleteEmployee(id: number) {
    return this.httpClient.delete(`${environment.server}${environment.employees}/${id}`);
  }

  public addEmployee(employee: Employee) {
    return this.httpClient.post(`${environment.server}${environment.employees}`, employee);
  }

  public updateEmployee(employee: Employee) {
    return this.httpClient.put(`${environment.server}${environment.employees}`, employee);
  }

  public getPerformance() {
    return this.httpClient.get(`${environment.server}${environment.performance}`);
  }

  public addPerformance(data: Performance) {
    return this.httpClient.post(`${environment.server}${environment.performance}`, data);
  }

  public updatePerformance(data: Performance) {
    return this.httpClient.put(`${environment.server}${environment.performance}`, data);
  }
}

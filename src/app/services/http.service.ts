import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public getEmployees() {
    return this.httpClient.get(`${environment.server}${environment.employees}`);
  }

  public deleteEmployee(id: number) {
    return this.httpClient.delete(`${environment.server}${environment.employees}/${id}`);
  }

  public addEmployee(data: {name: string, position: string, experience: number, nationality: string}) {
    return this.httpClient.post(`${environment.server}${environment.employees}`, data);
  }

  public updateEmployee(data: {name: string, position: string, experience: number, nationality: string}) {
    return this.httpClient.put(`${environment.server}${environment.employees}`, data);
  }

  public getPerformance() {
    return this.httpClient.get(`${environment.server}${environment.performance}`);
  }

  public addPerformance(data: {grade: number, date: string, employeeName: string, comment: string}) {
    return this.httpClient.post(`${environment.server}${environment.performance}`, data);
  }

  public updatePerformance(data: {grade: number, date: string, employeeName: string, comment: string}) {
    return this.httpClient.put(`${environment.server}${environment.performance}`, data);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _ApiService:ApiService) { }

  create(task:Task) {
    return this._ApiService.post(`${environment.apiURL}/task/post`, task);
  }

  update(task:Task) {
    return this._ApiService.put(`${environment.apiURL}/task/put`, task);
  }

  get() {
    return this._ApiService.get(`${environment.apiURL}/task/get`);
  }

  getDeatails(id:any) {
    return this._ApiService.get(`${environment.apiURL}/Task/GetByID?id=${id}`);
  }

  delete(id:number) {
    return this._ApiService.delete(`${environment.apiURL}/task/delete?id=${id}`);
  }



}

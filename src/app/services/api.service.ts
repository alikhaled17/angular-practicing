import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient:HttpClient) { }

  get(url:string) {
    return this._httpClient.get(url);
  }

  post(url:string, body:any) {
    return this._httpClient.post(url, body);
  }

  put(url:string, body:any) {
    return this._httpClient.put(url, body);
  }

  delete(url:string) {
    return this._httpClient.delete(url);
  }
}

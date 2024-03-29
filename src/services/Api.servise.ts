import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResult, ApiUserResult } from '../Types/apiResult';
import { Iuser } from '../Types/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  defaultUrl = 'https://reqres.in/api/';
  constructor(private http: HttpClient) {}
  getPageByNumber(num: number) {
    return this.http.get<ApiResult<Iuser>>(
      this.defaultUrl + 'users?page=' + num
    );
  }
  getUserById(id: number) {
    return this.http.get<ApiUserResult<Iuser>>(this.defaultUrl + 'users/' + id);
  }
}

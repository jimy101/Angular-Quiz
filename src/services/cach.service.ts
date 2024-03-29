import { Injectable } from '@angular/core';
import { ApiService } from './Api.servise';
import { Iuser } from '../Types/user';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CachService {
  users: Iuser[] = [];
  pages: number[] = [];
  //   pageNumber: number = 1;
  //   id: number = 0;
  //   user: Iuser = {
  //     id: 0,
  //     email: '',
  //     first_name: '',
  //     last_name: '',
  //     avatar: '',
  //   };
  constructor(private apiServ: ApiService) {}

  getLocalDataByPage(num: number) {
    if (sessionStorage.getItem(`users${num}`)) {
      return  JSON.parse(sessionStorage.getItem('users') || '');
    }
    this.apiServ.getPageByNumber(num).subscribe({
      next: (response) => {
        console.log(response);
        sessionStorage.setItem(`users${num}`, JSON.stringify(response));
        this.users = response.data;
        this.pages = [];
        for (let i = 1; i <= response.total_pages; i++) {
          this.pages.push(i);
        }
        console.log(this.users);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //   getUserById(id: number) {
  //     this.apiServ.getUserById(id).subscribe({
  //       next: (response) => {
  //         console.log(response);
  //         this.user = response.data;
  //         console.log(this.user);
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       },
  //     });
  //   }
}

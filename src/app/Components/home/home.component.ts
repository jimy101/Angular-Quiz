import { Component } from '@angular/core';
import { ApiService } from '../../../services/Api.servise';
import { response } from 'express';
import { Iuser } from '../../../Types/user';
import { Router } from '@angular/router';
import { CachService } from '../../../services/cach.service';

@Component({
  selector: 'home',

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pageNumber: number = 1;
  users: Iuser[] = [];
  pages: number[] = [];
  constructor(
    private apiServ: ApiService,
    private router: Router,
  ) {
    this.getDataByPage(this.pageNumber);
  }

  getDataByPage(num: number) {
    this.apiServ.getPageByNumber(num).subscribe({
      next: (response) => {
        console.log(response);
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
  paginate(num: number) {
    console.log(num);
    this.pageNumber = num;
    this.getDataByPage(this.pageNumber);
    this.router.navigateByUrl(`/home/${num}`);
  }
  goToDetails(id: Number) {
    console.log(id);
    this.router.navigateByUrl(`/user/${id}`);
  }
}

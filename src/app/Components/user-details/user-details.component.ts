import { Component } from '@angular/core';
import { Iuser } from '../../../Types/user';
import { ApiService } from '../../../services/Api.servise';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  id: number = 0;
  user: Iuser = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  };
  constructor(private apiServ: ApiService, private route: ActivatedRoute) {
    this.id = +this.route.snapshot.params['id'];
    console.log(this.route.snapshot);
    this.getUserById(this.id);
  }
  getUserById(id: number) {
    this.apiServ.getUserById(id).subscribe({
      next: (response) => {
        console.log(response);
        this.user = response.data;
        console.log(this.user);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

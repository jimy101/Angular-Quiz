import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        redirectTo: 'home/1',
      },
      {
        path: 'home/:page',
        component: HomeComponent,
      },
      {
        path: 'user/:id',
        component: UserDetailsComponent,
      },
    ],
  },
];

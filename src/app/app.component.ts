import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isLoading = false;
  title = 'Angular-Quiz';
  constructor(private loadServ: LoaderService) {
    this.loadServ.isLoaded.subscribe((val) => (this.isLoading = val));
  }
}

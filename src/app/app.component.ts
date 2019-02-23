import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user = null;
  constructor( public authService: AuthService) { }
    ngOnInit() {
      if (this.authService.isLoggedIn()) {
        this.user = this.authService.getClaims();
        console.log(this.user);
      }
  }
  logout() {
    this.authService.Logout();
    return false;
  }
}

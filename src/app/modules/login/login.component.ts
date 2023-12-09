// login.component.ts
import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../core/services/auth.service";
import {TokenResponse} from "../../core/models/user.model";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  handleLogin(): void {
    this.authService.login(this.username, this.password).subscribe(
      (data: TokenResponse) => {
        // Handle successful login
        console.log('Login successful:', data);
      }
    );
  }

  handleRefreshToken(): void {
    this.authService.refreshToken().subscribe(
      (data: TokenResponse) => {
        // Handle successful token refresh
        console.log('Token refresh successful:', data);
      }
    );
  }
}

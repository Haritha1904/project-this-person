import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  showPassword = false;

  constructor(private router: Router) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  login(): void {

    if (!this.email) {
      alert('Please enter your email.');
      return;
    }

    if (!this.password) {
      alert('Please enter your password.');
      return;
    }

    console.log('Login attempted:', {
      email: this.email
    });

    alert('Login successful!');

    this.router.navigate(['/my-bookings']);
  }

}
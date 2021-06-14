import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  // Handle errors
  error: any = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (result) => {
        console.log(result);
        this.error = null;
      },
      (error) => {
        this.error = error.error.message;
      },
      () => {
        console.log('login completed');
      }
    );
  }
}

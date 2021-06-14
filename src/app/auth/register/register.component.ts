import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  dateOfBirthday: Date;
  // Error variables
  errorsFromDb: any = null;
  usernameError: any = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  register(): void {
    // register the user to the database if the data is correct
    this.authService
      .register(
        this.username,
        this.email,
        this.password,
        this.firstName,
        this.lastName,
        this.dateOfBirthday
      )
      .subscribe(
        (result) => {
          console.log(result);
          this.usernameError = null;
          this.errorsFromDb = null;
        },
        (error) => {
          const message = error.error.message;
          if (Array.isArray(message)) {
            this.errorsFromDb = message;
            this.usernameError = null;
          } else {
            this.usernameError = message;
            this.errorsFromDb = null;
          }
        },
        () => {
          console.log('register completed');
        }
      );
  }
}

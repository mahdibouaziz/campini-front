import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modal/user';
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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  register(): void {
    // verify the data here
    console.log(
      this.firstName,
      this.lastName,
      this.username,
      this.email,
      this.password,
      this.dateOfBirthday
    );

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
        },
        (error) => {
          console.log(error.error.message);
        },
        () => {
          console.log('register completed');
        }
      );
  }
}

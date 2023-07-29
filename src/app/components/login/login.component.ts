import { ConnectorService } from './../connector.service';
import { CreateUserService } from './../../services/User/create-user.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  BlogCreatingUser: any;
  private LoginUserAgain = 'LoginUser';
  post: any;
  LoginUser: any = {
    userEmail: '',
    userPassword: '',
  };
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private LoginRef: MatDialogRef<LoginComponent>,
    private CreateUserService: CreateUserService,
    private ConnectorService: ConnectorService
  ) {}
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [Validators.required]);
  formGroup = this.formBuilder.group({
    email: this.emailFormControl,
    password: this.passwordFormControl,
  });

  ngOnInit(): void {}
  onsubmit() {
    const LogUser = this.http
      .post(`${environment.baseURL}/${this.LoginUserAgain} `, this.LoginUser)
      .subscribe(
        (data) => {
          this.post = data;
          // console.log(this.ConnectorService.DataBridge);
          // this.BlogCreatingUser = this.post['userID'];
          if (data) {
            // console.log(data);
            this.router.navigate(['/dummy']);
            this.LoginRef.close();
          }
          this.ConnectorService.setData(this.post['userID']);
        },
        (error: HttpErrorResponse) => {
          // Handle error response
          if (error.status === 400) {
            alert('You need to Signup First');
          }
          // console.error('Error Status:', error.status); // HTTP status code (e.g., 400, 401, etc.)
          // console.error('Error Message:', error.message); // Error message from the server (if available)
        }
      );
  }
}

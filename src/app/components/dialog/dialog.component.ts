import { HttpClient } from '@angular/common/http';
import { CreateUserService } from '../../services/User/create-user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  Validators,
} from '@angular/forms';
import { NewUser } from 'src/app/model/createUser';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  private register = 'RegisterNewUser';
  registerNewUser: any = {
    userEmail: '',
    userPassword: '',
  };
  constructor(
    private CreateUserService: CreateUserService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private dialogref: MatDialogRef<DialogComponent>
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
    if (this.register != '') {
      this.http
        .post(`${environment.baseURL}/${this.register} `, this.registerNewUser)
        .subscribe((response) => {
          this.dialogref.close();
          this.CreateUserService.authenticated = true;
          this.router.navigate(['/dummy']);
        });
    } else {
      console.log('You should provide required data');
    }
  }
}

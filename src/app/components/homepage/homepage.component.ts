import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(public Dialog: MatDialog) {}
  isStyleNone: boolean = false;
  dialogRef: MatDialogRef<DialogComponent> | null = null;
  LoginRef: MatDialogRef<LoginComponent> | null = null;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  ngOnInit(): void {}
  signup() {
    this.isStyleNone = true;
    if (this.isStyleNone) {
      this.dialogRef = this.Dialog.open(DialogComponent, {
        panelClass: 'custom-dialog-container',
      });
      this.dialogRef.afterClosed().subscribe((result) => {
        if (result == undefined) {
          this.isStyleNone = false;
        }
      });
    }
  }
  signin() {
    this.isStyleNone = true;
    if (this.isStyleNone) {
      this.LoginRef = this.Dialog.open(LoginComponent, {
        panelClass: 'custom-dialog-container',
      });
      this.LoginRef.afterClosed().subscribe((result) => {
        if (result == undefined) {
          this.isStyleNone = false;
        }
      });
    }
  }
}

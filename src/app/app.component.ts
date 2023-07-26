import { CreateUserService } from './services/User/create-user.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(private CreateUserService: CreateUserService) {}
  ngOnInit(): void {
    console.log(this.CreateUserService.authenticated);
  }
}

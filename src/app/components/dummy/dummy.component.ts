import { CreateUserService } from '../../services/User/create-user.service';
import { Component, OnInit } from '@angular/core';
import { NewUser } from 'src/app/model/createUser';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
})
export class DummyComponent implements OnInit {
  newUser: NewUser[] = [];
  constructor(private CreateUserService: CreateUserService) {}
  ngOnInit(): void {
    this.CreateUserService.GetAllUsers().subscribe((user) => {
      this.newUser = user;
      // console.log(this.newUser);
    });
  }
}

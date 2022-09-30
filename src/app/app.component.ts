import { Component, OnInit } from '@angular/core';
import { IPost, IUser } from './shared/model/user.model';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: IUser[] = [];
  selectedUser!: IUser | null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    return this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
  getUserById(id: number) {
    this.selectedUser = null;
    return this.userService.getUserById(id).subscribe((user) => {
      this.selectedUser = user;
    });
  }
}

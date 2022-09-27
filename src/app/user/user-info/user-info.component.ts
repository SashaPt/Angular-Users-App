import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPost, IUser } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  @Input() user!: IUser;
  @Input() posts!: IPost[];
  @Output() onClick = new EventEmitter<number>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  getPostsByUserId(userId: number) {
    this.onClick.emit(userId)
  }
}

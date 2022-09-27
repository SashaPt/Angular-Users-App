import { Component, Input, OnInit } from '@angular/core';
import { IPost, IUser } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {
  @Input() post!: IPost;

  constructor() { }

  ngOnInit(): void {
  }

}

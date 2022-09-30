import { Component, Input, OnInit } from '@angular/core';
import { IComment, IPost, IUser } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss'],
})
export class UserPostComponent implements OnInit {
  @Input() post!: IPost;
  comments: IComment[] = [];
  isShow: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  getComments(id: number) {
    this.isShow = !this.isShow;
    if (this.comments.length === 0) {
      return this.userService
        .getCommentsByPostId(id)
        .subscribe((comments) => {
          this.comments = comments;
        });
    } else {
      return;
    }
  }
}

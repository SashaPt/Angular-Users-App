import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.scss'],
})
export class UserCommentComponent implements OnInit {
  @Input() comment!: IComment;
  constructor() {}

  ngOnInit(): void {}
}

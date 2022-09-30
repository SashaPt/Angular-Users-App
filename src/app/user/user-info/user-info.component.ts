import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAlbum, IPost, ITodo, IUser } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  @Input() user!: IUser;
  posts: IPost[] = [];
  todos: ITodo[] = [];
  albums: IAlbum[] = [];
  isPostsShow: boolean = false;
  isTodosShow: boolean = false;
  isAlbumsShow: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  getPosts(id: number) {
    this.isPostsShow = true;
    this.isTodosShow = false;
    this.isAlbumsShow = false;
    return this.userService
      .getPostsByUserId(this.user.id)
      .subscribe((posts) => {
        this.posts = posts;
      });
  }
  getTodos(id: number) {
    this.isPostsShow = false;
    this.isTodosShow = true;
    this.isAlbumsShow = false;
    return this.userService
      .getTodosByUserId(this.user.id)
      .subscribe((todos) => {
        this.todos = todos;
      });
  }
  getAlbums(id: number) {
    this.isPostsShow = false;
    this.isTodosShow = false;
    this.isAlbumsShow = true;
    return this.userService
      .getAlbumsByUserId(this.user.id)
      .subscribe((albums) => {
        this.albums = albums;
      });
  }
}

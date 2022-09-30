import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserItemComponent } from './user/user-item/user-item.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserPostComponent } from './user/user-post/user-post.component';
import { UserCommentComponent } from './user/user-comment/user-comment.component';
import { UserTodoComponent } from './user/user-todo/user-todo.component';
import { UserAlbumComponent } from './user/user-album/user-album.component';
import { UserPhotoComponent } from './user/user-photo/user-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserInfoComponent,
    UserPostComponent,
    UserCommentComponent,
    UserTodoComponent,
    UserAlbumComponent,
    UserPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

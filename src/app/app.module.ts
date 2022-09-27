import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserItemComponent } from './user/user-item/user-item.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserPostComponent } from './user/user-post/user-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserInfoComponent,
    UserPostComponent
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

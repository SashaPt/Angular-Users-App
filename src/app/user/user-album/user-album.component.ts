import { Component, Input, OnInit } from '@angular/core';
import { IAlbum, IPhoto } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-album',
  templateUrl: './user-album.component.html',
  styleUrls: ['./user-album.component.scss'],
})
export class UserAlbumComponent implements OnInit {
  @Input() album!: IAlbum;
  photos: IPhoto[] = [];
  isShow: boolean = false;
  photoItem!: IPhoto;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  getPhotos(id: number) {
    if (this.photos.length) {
      this.isShow = !this.isShow;
      return;
    }
    return this.userService.getPhotosByAlbumId(id).subscribe((photos) => {
      this.photos = photos;
      this.photoItem = photos[0];
      this.isShow = true;
    })
  }
}

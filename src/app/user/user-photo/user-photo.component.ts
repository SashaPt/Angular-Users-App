import { Component, Input, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.scss'],
})
export class UserPhotoComponent implements OnInit {
  @Input() photo!: IPhoto;
  title: string = '';
  constructor() {}

  ngOnInit(): void {
    this.title = this.photo.title
      .split(' ')
      .map((el: string, ind: number) => (ind < 2 ? el : ''))
      .join(' ');
  }
}

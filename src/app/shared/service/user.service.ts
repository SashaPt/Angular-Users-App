import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost, IUser } from '../model/user.model';

const URL_PREFIX = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${URL_PREFIX}/users`);
  }
  getUserById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${URL_PREFIX}/users/${id}`)
  }
  getPostsByUserId(userId: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${URL_PREFIX}/users/${userId}/posts`)
  }
}

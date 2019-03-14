import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UserService {

  apiUrl = '/server/api/users';

  users: User[];

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  saveUser(user: User): Observable<any> {
    return this.http.post<User>(this.apiUrl, user);
  }

  deleteUser(id): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put<User>(this.apiUrl, user);
  }
}

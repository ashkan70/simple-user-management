import {Component, OnInit} from '@angular/core';
import {User} from './user.model';
import {UserService} from './user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  displayedColumns: string[] = ['id', 'nationalCode', 'firstName', 'lastName',
    'birthdate', 'email', 'phoneNumber', 'address', 'edit'];

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = [];
    this.userService.getUsers()
      .subscribe(theUsers => {
        console.log(theUsers);
        this.users = theUsers;
      });
  }
}

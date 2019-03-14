import {Component, OnInit} from '@angular/core';
import {User} from '../user.model';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  nationalCode?: string;
  firstName: string;
  lastName: string;
  birthdate?: Date;
  email: string;
  phoneNumber?: string;
  address?: string;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  saveUser() {
    const user = new User();
    user.nationalCode = this.nationalCode;
    user.firstName = this.firstName;
    user.lastName = this.lastName;
    user.birthdate = this.birthdate;
    user.email = this.email;
    user.phoneNumber = this.phoneNumber;
    user.address = this.address;

    this.userService.saveUser(user)
      .subscribe(res => this.router.navigate(['/home']));
  }
}

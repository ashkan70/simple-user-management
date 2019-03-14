import {Component, OnInit} from '@angular/core';
import {User} from '../user.model';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const id = this.activatedRoute.snapshot.params.id;
    this.userService.getUser(id)
      .subscribe(theUser => this.user = theUser);
  }

  updateUser() {
    this.userService.updateUser(this.user)
      .subscribe(res => this.router.navigate(['/home']));
  }
}

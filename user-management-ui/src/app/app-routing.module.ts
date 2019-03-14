import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {AddUserComponent} from './user/add-user/add-user.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'home', component: UserComponent},
  {path: 'addUser', component: AddUserComponent},
  {path: 'user/:id/edit', component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

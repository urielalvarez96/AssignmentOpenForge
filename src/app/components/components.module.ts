import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { IonicModule } from '@ionic/angular';
import { SpecificUserComponent } from './specific-user/specific-user.component';

@NgModule({
  declarations: [
    SpecificUserComponent,
    UsersComponent,
    UserComponent
  ],
  exports: [
    UsersComponent,
    SpecificUserComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }

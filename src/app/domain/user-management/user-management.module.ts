import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRoutingModule } from './user-routing.module';
import { UserRegisterComponent } from './user-register/user-register.component';

@NgModule({
  imports: [
    ShareModule,
    UserRoutingModule
  ],
  declarations: [UserLoginComponent, UserRegisterComponent]
})
export class UserManagementModule { }

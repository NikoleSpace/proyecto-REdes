import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './components/signin/signin.component';
import { ToogleComponent } from './components/signin/toogle/toogle.component';


@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,
    ToogleComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule 
  ]
})
export class AuthModule { }

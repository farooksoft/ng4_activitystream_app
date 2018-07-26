import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MessageComponent } from './message/message.component';
import { CircleComponent } from './circle/circle.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserService } from './user.service';
import { MessageService } from './message.service';
import { CircleService } from './circle.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MessageComponent,
    CircleComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  //providers: [UserService, MessageService , CircleService ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

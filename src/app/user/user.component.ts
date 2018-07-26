//import { Component, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User, USERS } from './user';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit  {

  users : User[];
  constructor (){

  }
  
  ngOnInit(){
    this.users= USERS;
  }
}

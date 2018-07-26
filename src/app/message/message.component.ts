import { Component, OnInit } from '@angular/core';
import { Message , MESSAGE } from './message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages : Message[];
  constructor() { }

  ngOnInit() {
    this.messages = MESSAGE;
  }

}

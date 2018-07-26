import { Injectable } from '@angular/core';
import { Message , MESSAGE } from './message/message';

@Injectable()
export class MessageService {

  constructor() { }
    getMessage() : Message[]{
      return MESSAGE;
    }
}

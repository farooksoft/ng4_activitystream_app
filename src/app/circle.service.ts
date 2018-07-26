import { Injectable } from '@angular/core';
import { Circle, CIRCLES } from './circle/circle';


@Injectable()
export class CircleService {

  constructor() { }
    getCircle() : Circle[]{
      return CIRCLES;
    }
}

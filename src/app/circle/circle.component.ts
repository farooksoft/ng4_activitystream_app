import { Component, OnInit } from '@angular/core';
import { Circle, CIRCLES } from './circle';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  circles : Circle[];
  constructor() { }

  ngOnInit() {
    this.circles = CIRCLES;
  }

}

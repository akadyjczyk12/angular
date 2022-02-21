import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-water-wrapper',
  templateUrl: './water-wrapper.component.html',
  styleUrls: ['./water-wrapper.component.css']
})
export class WaterWrapperComponent implements OnInit {

  @Input() title = '';

  constructor() { }

  ngOnInit() {
  }

}

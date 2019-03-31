import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-spacing-demo',
  templateUrl: './spacing-demo.component.html',
  styleUrls: ['./spacing-demo.component.scss']
})
export class SpacingDemoComponent implements OnInit {

  layoutList = [
    { label: 'row', value: 'row', selected: true },
    { label: 'column', value: 'column', selected: false }
  ];

  layout: 'row' | 'column' = 'row';
  gap = '10px';

  constructor() { }

  ngOnInit() {
  }

  onLayoutChange(layoutValue: 'row' | 'column') {
    this.layout = layoutValue;
  }

}

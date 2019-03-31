import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-align-demo',
  templateUrl: './align-demo.component.html',
  styleUrls: ['./align-demo.component.scss']
})
export class AlignDemoComponent implements OnInit {

  alignList = [
    { label: 'start', value: 'start', selected: true },
    { label: 'center', value: 'center', selected: false },
    { label: 'end', value: 'end', selected: false }
  ];

  currentAlign = 'start';

  constructor() { }


  ngOnInit() {
  }

  onAlignChange(alignValue: string) {
    this.currentAlign = alignValue;
  }

}

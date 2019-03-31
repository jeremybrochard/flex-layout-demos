import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-alignment-demo',
  templateUrl: './alignment-demo.component.html',
  styleUrls: ['./alignment-demo.component.scss']
})
export class AlignmentDemoComponent implements OnInit {

  layoutList = [
    { label: 'row', value: 'row', selected: true },
    { label: 'column', value: 'column', selected: false }
  ];

  mainAxisAlignmentlist = [
    { label: 'none', value: 'none', selected: false },
    { label: 'start (default)', value: 'start', selected: true },
    { label: 'center', value: 'center', selected: false },
    { label: 'end', value: 'end', selected: false },
    { label: 'space-around', value: 'space-around', selected: false },
    { label: 'space-between', value: 'space-between', selected: false },
    { label: 'space-evenly', value: 'space-evenly', selected: false }
  ];

  crossAxisAlignmentlist = [
    { label: 'none', value: 'none', selected: false },
    { label: 'start', value: 'start', selected: false },
    { label: 'center', value: 'center', selected: false },
    { label: 'end', value: 'end', selected: false },
    { label: 'stretch (default)', value: 'stretch', selected: true }
  ];

  layout: 'row' | 'column' = 'row';
  mainAlignment: any = 'start';
  crossAlignment: any = 'stretch';

  constructor() { }

  ngOnInit() {
  }

  onLayoutChange(layoutValue: 'row' | 'column') {
    this.layout = layoutValue;
  }

  onMainAlignmentChange(val: any) {
    this.mainAlignment = val;
  }

  onCrossAlignmentChange(val: any) {
    this.crossAlignment = val;
  }
}

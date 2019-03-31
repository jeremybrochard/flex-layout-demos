import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignmentDemoComponent } from './alignment-demo.component';

describe('AlignmentDemoComponent', () => {
  let component: AlignmentDemoComponent;
  let fixture: ComponentFixture<AlignmentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlignmentDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignmentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

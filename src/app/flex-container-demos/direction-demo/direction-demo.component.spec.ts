import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionDemoComponent } from './direction-demo.component';

describe('DirectionDemoComponent', () => {
  let component: DirectionDemoComponent;
  let fixture: ComponentFixture<DirectionDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

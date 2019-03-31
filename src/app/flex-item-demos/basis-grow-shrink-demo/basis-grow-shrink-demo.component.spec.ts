import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasisGrowShrinkDemoComponent } from './basis-grow-shrink-demo.component';

describe('BasisGrowShrinkDemoComponent', () => {
  let component: BasisGrowShrinkDemoComponent;
  let fixture: ComponentFixture<BasisGrowShrinkDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasisGrowShrinkDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasisGrowShrinkDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

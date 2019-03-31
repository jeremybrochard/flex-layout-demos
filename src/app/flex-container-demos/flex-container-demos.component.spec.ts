import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexContainerDemosComponent } from './flex-container-demos.component';

describe('FlexContainerDemosComponent', () => {
  let component: FlexContainerDemosComponent;
  let fixture: ComponentFixture<FlexContainerDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexContainerDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexContainerDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

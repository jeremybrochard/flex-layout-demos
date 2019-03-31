import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexItemDemosComponent } from './flex-item-demos.component';

describe('FlexItemDemosComponent', () => {
  let component: FlexItemDemosComponent;
  let fixture: ComponentFixture<FlexItemDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexItemDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexItemDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexResponsiveDemosComponent } from './flex-responsive-demos.component';

describe('FlexResponsiveDemosComponent', () => {
  let component: FlexResponsiveDemosComponent;
  let fixture: ComponentFixture<FlexResponsiveDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexResponsiveDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexResponsiveDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

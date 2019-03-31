import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexLiveDemoComponent } from './flex-live-demo.component';

describe('FlexLiveDemoComponent', () => {
  let component: FlexLiveDemoComponent;
  let fixture: ComponentFixture<FlexLiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexLiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexLiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

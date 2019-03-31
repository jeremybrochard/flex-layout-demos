import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacingDemoComponent } from './spacing-demo.component';

describe('SpacingDemoComponent', () => {
  let component: SpacingDemoComponent;
  let fixture: ComponentFixture<SpacingDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacingDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

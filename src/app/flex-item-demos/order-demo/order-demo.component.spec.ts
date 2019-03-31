import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDemoComponent } from './order-demo.component';

describe('OrderDemoComponent', () => {
  let component: OrderDemoComponent;
  let fixture: ComponentFixture<OrderDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

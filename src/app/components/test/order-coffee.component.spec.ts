import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCoffeeComponent } from './order-coffee.component';

describe('TestComponent', () => {
  let component: OrderCoffeeComponent;
  let fixture: ComponentFixture<OrderCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCoffeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardhoverComponent } from './cardhover.component';

describe('CardhoverComponent', () => {
  let component: CardhoverComponent;
  let fixture: ComponentFixture<CardhoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardhoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardhoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

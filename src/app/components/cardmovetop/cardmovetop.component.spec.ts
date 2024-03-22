import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmovetopComponent } from './cardmovetop.component';

describe('CardmovetopComponent', () => {
  let component: CardmovetopComponent;
  let fixture: ComponentFixture<CardmovetopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardmovetopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardmovetopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

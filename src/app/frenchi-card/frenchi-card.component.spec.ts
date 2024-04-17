import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchiCardComponent } from './frenchi-card.component';

describe('FrenchiCardComponent', () => {
  let component: FrenchiCardComponent;
  let fixture: ComponentFixture<FrenchiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrenchiCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrenchiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

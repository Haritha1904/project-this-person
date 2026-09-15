import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickACard } from './pick-a-card';

describe('PickACard', () => {
  let component: PickACard;
  let fixture: ComponentFixture<PickACard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickACard],
    }).compileComponents();

    fixture = TestBed.createComponent(PickACard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

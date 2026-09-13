import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReaderList } from './reader-list';

describe('ReaderList', () => {
  let component: ReaderList;
  let fixture: ComponentFixture<ReaderList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReaderList],
    }).compileComponents();

    fixture = TestBed.createComponent(ReaderList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

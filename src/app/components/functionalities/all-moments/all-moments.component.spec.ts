import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMomentsComponent } from './all-moments.component';

describe('AllMomentsComponent', () => {
  let component: AllMomentsComponent;
  let fixture: ComponentFixture<AllMomentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMomentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

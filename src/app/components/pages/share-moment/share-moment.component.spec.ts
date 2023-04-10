import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareMomentComponent } from './share-moment.component';

describe('ShareMomentComponent', () => {
  let component: ShareMomentComponent;
  let fixture: ComponentFixture<ShareMomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareMomentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

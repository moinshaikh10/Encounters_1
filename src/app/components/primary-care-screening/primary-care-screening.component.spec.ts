import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryCareScreeningComponent } from './primary-care-screening.component';

describe('PrimaryCareScreeningComponent', () => {
  let component: PrimaryCareScreeningComponent;
  let fixture: ComponentFixture<PrimaryCareScreeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryCareScreeningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryCareScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

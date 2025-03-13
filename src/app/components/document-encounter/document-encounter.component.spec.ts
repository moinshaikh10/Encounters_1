import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentEncounterComponent } from './document-encounter.component';

describe('DocumentEncounterComponent', () => {
  let component: DocumentEncounterComponent;
  let fixture: ComponentFixture<DocumentEncounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentEncounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentEncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

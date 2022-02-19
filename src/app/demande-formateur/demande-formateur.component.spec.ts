import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeFormateurComponent } from './demande-formateur.component';

describe('DemandeFormateurComponent', () => {
  let component: DemandeFormateurComponent;
  let fixture: ComponentFixture<DemandeFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

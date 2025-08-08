import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialAlumno } from './historial-alumno';

describe('HistorialAlumno', () => {
  let component: HistorialAlumno;
  let fixture: ComponentFixture<HistorialAlumno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialAlumno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialAlumno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

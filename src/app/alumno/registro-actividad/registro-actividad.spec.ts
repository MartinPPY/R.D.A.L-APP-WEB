import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroActividad } from './registro-actividad';

describe('RegistroActividad', () => {
  let component: RegistroActividad;
  let fixture: ComponentFixture<RegistroActividad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroActividad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroActividad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

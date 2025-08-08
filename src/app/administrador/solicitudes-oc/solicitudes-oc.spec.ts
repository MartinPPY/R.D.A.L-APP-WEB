import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesOc } from './solicitudes-oc';

describe('SolicitudesOc', () => {
  let component: SolicitudesOc;
  let fixture: ComponentFixture<SolicitudesOc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudesOc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesOc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

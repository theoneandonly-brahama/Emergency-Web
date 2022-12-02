import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAmbulanceComponent } from './admin-ambulance.component';

describe('AdminAmbulanceComponent', () => {
  let component: AdminAmbulanceComponent;
  let fixture: ComponentFixture<AdminAmbulanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAmbulanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAmbulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

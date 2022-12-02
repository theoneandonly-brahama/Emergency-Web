import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRemorqueurComponent } from './admin-remorqueur.component';

describe('AdminRemorqueurComponent', () => {
  let component: AdminRemorqueurComponent;
  let fixture: ComponentFixture<AdminRemorqueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRemorqueurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRemorqueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoctorantsComponent } from './admin-doctorants.component';

describe('AdminDoctorantsComponent', () => {
  let component: AdminDoctorantsComponent;
  let fixture: ComponentFixture<AdminDoctorantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDoctorantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDoctorantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceTableComponent } from './presence-table.component';

describe('PresenceTableComponent', () => {
  let component: PresenceTableComponent;
  let fixture: ComponentFixture<PresenceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresenceTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

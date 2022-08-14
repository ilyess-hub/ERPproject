import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeshipsTableComponent } from './traineeships-table.component';

describe('TraineeshipsTableComponent', () => {
  let component: TraineeshipsTableComponent;
  let fixture: ComponentFixture<TraineeshipsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeshipsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeshipsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

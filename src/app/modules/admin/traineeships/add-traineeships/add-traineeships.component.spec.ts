import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTraineeshipsComponent } from './add-traineeships.component';

describe('AddTraineeshipsComponent', () => {
  let component: AddTraineeshipsComponent;
  let fixture: ComponentFixture<AddTraineeshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTraineeshipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTraineeshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

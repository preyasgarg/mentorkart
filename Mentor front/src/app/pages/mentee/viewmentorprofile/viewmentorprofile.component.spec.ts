import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmentorprofileComponent } from './viewmentorprofile.component';

describe('ViewmentorprofileComponent', () => {
  let component: ViewmentorprofileComponent;
  let fixture: ComponentFixture<ViewmentorprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmentorprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmentorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

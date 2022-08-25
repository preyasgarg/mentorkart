import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalsignupComponent } from './globalsignup.component';

describe('GlobalsignupComponent', () => {
  let component: GlobalsignupComponent;
  let fixture: ComponentFixture<GlobalsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

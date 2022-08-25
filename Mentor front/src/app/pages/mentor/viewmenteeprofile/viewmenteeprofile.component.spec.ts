import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmenteeprofileComponent } from './viewmenteeprofile.component';

describe('ViewmenteeprofileComponent', () => {
  let component: ViewmenteeprofileComponent;
  let fixture: ComponentFixture<ViewmenteeprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmenteeprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmenteeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

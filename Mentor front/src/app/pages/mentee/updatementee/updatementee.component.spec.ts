import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatementeeComponent } from './updatementee.component';

describe('UpdatementeeComponent', () => {
  let component: UpdatementeeComponent;
  let fixture: ComponentFixture<UpdatementeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatementeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatementeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

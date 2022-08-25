import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatementorComponent } from './updatementor.component';

describe('UpdatementorComponent', () => {
  let component: UpdatementorComponent;
  let fixture: ComponentFixture<UpdatementorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatementorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

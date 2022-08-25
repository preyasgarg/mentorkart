import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmenteeComponent } from './addmentee.component';

describe('AddmenteeComponent', () => {
  let component: AddmenteeComponent;
  let fixture: ComponentFixture<AddmenteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmenteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

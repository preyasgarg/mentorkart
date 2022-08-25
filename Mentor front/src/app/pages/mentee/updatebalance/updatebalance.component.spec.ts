import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebalanceComponent } from './updatebalance.component';

describe('UpdatebalanceComponent', () => {
  let component: UpdatebalanceComponent;
  let fixture: ComponentFixture<UpdatebalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

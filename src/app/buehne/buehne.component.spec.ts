import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuehneComponent } from './buehne.component';

describe('BuehneComponent', () => {
  let component: BuehneComponent;
  let fixture: ComponentFixture<BuehneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuehneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuehneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

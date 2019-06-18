import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogClockMainComponent } from './analog-clock-main.component';

describe('AnalogClockMainComponent', () => {
  let component: AnalogClockMainComponent;
  let fixture: ComponentFixture<AnalogClockMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalogClockMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogClockMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

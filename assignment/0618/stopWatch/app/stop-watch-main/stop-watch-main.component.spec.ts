import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopWatchMainComponent } from './stop-watch-main.component';

describe('StopWatchMainComponent', () => {
  let component: StopWatchMainComponent;
  let fixture: ComponentFixture<StopWatchMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopWatchMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopWatchMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

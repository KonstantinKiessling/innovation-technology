import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LautChartComponent } from './laut-chart.component';

describe('LautChartComponent', () => {
  let component: LautChartComponent;
  let fixture: ComponentFixture<LautChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LautChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LautChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

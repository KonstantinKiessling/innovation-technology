import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VibrChartComponent } from './vibr-chart.component';

describe('VibrChartComponent', () => {
  let component: VibrChartComponent;
  let fixture: ComponentFixture<VibrChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VibrChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VibrChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmChartComponent } from './rpm-chart.component';

describe('RpmChartComponent', () => {
  let component: RpmChartComponent;
  let fixture: ComponentFixture<RpmChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

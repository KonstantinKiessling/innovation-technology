import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitaetsgrenzeChartComponent } from './qualitaetsgrenze-chart.component';

describe('QualitaetsgrenzeChartComponent', () => {
  let component: QualitaetsgrenzeChartComponent;
  let fixture: ComponentFixture<QualitaetsgrenzeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualitaetsgrenzeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualitaetsgrenzeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

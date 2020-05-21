import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChartContainerComponent } from './app-chart-container.component';

describe('AppChartContainerComponent', () => {
  let component: AppChartContainerComponent;
  let fixture: ComponentFixture<AppChartContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppChartContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppChartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

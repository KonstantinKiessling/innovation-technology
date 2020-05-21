import { Component, OnChanges, Input } from '@angular/core';
import {engineData,} from '../models/engineData';
import {engineValues} from '../models/engineValues';
import { Chart } from 'chart.js';
import * as ChartAnnotation from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-app-area-chart',
  templateUrl: './app-area-chart.component.html',
  styleUrls: ['./app-area-chart.component.css']
})
export class AppAreaChartComponent implements OnChanges {

  @Input() data: engineData[];

  chart_rpm = [];
  chart_temp = [];
  chart_laut = [];
  chart_vibr = [];
  chart_qualitaetsgrenze = [];

  private rpm;
  private Tavg_temp;
  private Tavg_laut;
  private Tagv_vibr;
  private Qualitaetsgrenze;
  private Datum;

  constructor() { }

  ngOnChanges() {
    this.rpm = this.data.map(dataPoint => Number(dataPoint.werte.Rpm));
    this.Tavg_temp = this.data.map(dataPoint => parseFloat(dataPoint.werte.Tavg_temp));
    this.Tavg_laut = this.data.map(dataPoint => parseFloat(dataPoint.werte.Tavg_laut));
    this.Tagv_vibr = this.data.map(dataPoint => parseFloat(dataPoint.werte.Tavg_vibr));
    this.Qualitaetsgrenze = this.data.map(dataPoint => parseFloat(dataPoint.werte.Qualitaetsgrenze));
    this.Datum = this.data.map(dataPoint => this.parseDate(dataPoint.datum));
    console.log(this.Tavg_temp);
    this.makeChart();
  }

  ngOnInit() {
    let namedChartAnnotation = ChartAnnotation;
    namedChartAnnotation["id"]="annotation";
    Chart.pluginService.register( namedChartAnnotation);
  }

  parseDate(date:string): Date{
    var parts = date.split(/\.|\s|:/);
    return new Date(Number(parts[2]),Number(parts[1]),Number(parts[0]),Number(parts[3]),Number(parts[4]),Number(parts[5]))
  }

  makeChart(){
    this.chart_rpm = new Chart('rpm', {
      type: 'line',
      data: {
        labels: this.Datum,
        datasets: [
          {
            data: this.rpm,
            borderColor: "#3cba9f",
            fill: false,
            showLine: true,
            label: 'RPM'
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            type: 'time',
            time: {
              displayFormats: {
                second: 'h:mm:ss a'
              }
            }
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    this.chart_temp = new Chart('Tavg_temp', {
      type: 'line',
      data: {
        labels: this.Datum,
        datasets: [
          {
            data: this.Tavg_temp,
            borderColor: "#ffcc00",
            fill: false,
            showLine: true,
            label: 'Tavg_temp'
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            type: 'time',
            time: {
              displayFormats: {
                second: 'h:mm:ss a'
              }
            }
          }],
          yAxes: [{
            display: true
          }],
        },
        annotation: {
          annotations: [{
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 75,
            borderColor: 'yellow',
            borderWidth: 5,
            label: {
              enabled: true,
              content: 'Toleranzgrenze'
            }
          },
          {
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 150,
            borderColor: 'red',
            borderWidth: 5,
            label: {
              enabled: true,
              content: 'Schadensgrenze'
            }
          }
        ]
        }
      },
    });

    this.chart_laut = new Chart('Tavg_laut', {
      type: 'line',
      data: {
        labels: this.Datum,
        datasets: [
          {
            data: this.Tavg_laut,
            borderColor: "#3256a8",
            fill: false,
            showLine: true,
            label: 'Tavg_laut'
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            type: 'time',
            time: {
              displayFormats: {
                second: 'h:mm:ss a'
              }
            }
          }],
          yAxes: [{
            display: true
          }],
        },
        annotation: {
          annotations: [{
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 80,
            borderColor: 'yellow',
            borderWidth: 5,
            label: {
              enabled: true,
              content: 'Toleranzgrenze'
            }
          },
          {
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 117,
            borderColor: 'red',
            borderWidth: 5,
            label: {
              enabled: true,
              content: 'Schadensgrenze'
            }
          }
        ]
        }
      }
    });

    this.chart_vibr = new Chart('Tagv_vibr', {
      type: 'line',
      data: {
        labels: this.Datum,
        datasets: [
          {
            data: this.Tagv_vibr,
            borderColor: "#d40f0f",
            fill: false,
            showLine: true,
            label: 'Tagv_vibr'
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            type: 'time',
            time: {
              displayFormats: {
                second: 'h:mm:ss a'
              }
            }
          }],
          yAxes: [{
            display: true
          }],
        },
        annotation: {
          annotations: [{
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 0.15,
            borderColor: 'yellow',
            borderWidth: 5,
            label: {
              enabled: true,
              content: 'Toleranzgrenze'
            }
          },
          {
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 0.4,
            borderColor: 'red',
            borderWidth: 5,
            label: {
              enabled: true,
              content: 'Schadensgrenze'
            }
          }
        ]
        }
      }
    });

    this.chart_qualitaetsgrenze = new Chart('Qualitaetsgrenze', {
      type: 'line',
      data: {
        labels: this.Datum,
        datasets: [
          {
            data: this.Qualitaetsgrenze,
            borderColor: "#e602cf",
            fill: false,
            showLine: true,
            label: 'Qualitaetsgrenze'
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            type: 'time',
            time: {
              displayFormats: {
                second: 'h:mm:ss a'
              }
            }
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
}

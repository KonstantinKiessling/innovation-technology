import { Component, OnInit, Input } from '@angular/core';
import {engineData,} from '../models/engineData';
import {engineValues} from '../models/engineValues';
import { Chart } from 'chart.js';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import { DataService } from '../data-service/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  data: engineData[];

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

  ngOnInit(){
    document.getElementById('home').classList.add('active');
    document.getElementById('schmiermittel').classList.remove('active');
    document.getElementById('kugellagerlauf').classList.remove('active');
    document.getElementById('anlageninnenleben').classList.remove('active');
    document.getElementById('einstellungen').classList.remove('active');
    this.dataService.getData();
    this.dataService.dataChangeEvent.subscribe(data => {
    this.rpm = data.map(dataPoint => Number(dataPoint.werte.Rpm));
    this.Tavg_temp = data.map(dataPoint => parseFloat(dataPoint.werte.Tavg_temp));
    this.Tavg_laut = data.map(dataPoint => parseFloat(dataPoint.werte.Tavg_laut));
    this.Tagv_vibr = data.map(dataPoint => parseFloat(dataPoint.werte.Tavg_vibr));
    this.Qualitaetsgrenze = data.map(dataPoint => parseFloat(dataPoint.werte.Qualitaetsgrenze));
    this.Datum = data.map(dataPoint => this.parseDate(dataPoint.datum));
    this.makeChart();
    });

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
            gridLines: {
              color: '#e9edf2',
            },
            ticks: {
              fontColor: '#e9edf2',
            },
            display: true,
            type: 'time',
            time: {
              displayFormats: {
                second: 'h:mm:ss a'
              }
            }
          }],
          yAxes: [{
            gridLines: {
              color: '#e9edf2',
            },
            ticks: {
              fontColor: '#e9edf2',
            },
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
            gridLines: {
              color: '#e9edf2',
            },
            ticks: {
              fontColor: '#e9edf2',
            },
            display: true,
            type: 'time',
            time: {
              displayFormats: {
                second: 'h:mm:ss a'
              }
            }
          }],
          yAxes: [{
            gridLines: {
              color: '#e9edf2',
            },
            ticks: {
              fontColor: '#e9edf2',
            },
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
            borderColor: '#d24525',
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
            gridLines: {
              color: '#000000',
            },
            ticks: {
              fontColor: '#000000',
            },
            display: true,
            type: 'time',
            time: {
              displayFormats: {
                second: 'h:mm:ss a'
              }
            }
          }],
          yAxes: [{
            gridLines: {
              color: '#000000',
            },
            ticks: {
              fontColor: '#000000',
            },
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
            borderColor: '#d24525',
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
            gridLines: {
              color: '#000000',
            },
            ticks: {
              fontColor: '#000000',
            },
            display: true,
            type: 'time',
            time: {
              displayFormats: {
                second: 'h:mm:ss a'
              }
            }
          }],
          yAxes: [{
            gridLines: {
              color: '#000000',
            },
            ticks: {
              fontColor: '#000000',
            },
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
            borderColor: '#d24525',
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
            gridLines: {
              color: '#000000',
            },
            ticks: {
              fontColor: '#000000',
            },
            display: true,
            type: 'time',
            time: {
              displayFormats: {
                second: 'h:mm:ss a'
              }
            }
          }],
          yAxes: [{
            gridLines: {
              color: '#000000',
            },
            ticks: {
              fontColor: '#000000',
            },
            display: true
          }],
        }
      }
    });
  }
}

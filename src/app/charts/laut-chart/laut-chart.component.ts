import { Component, OnInit } from '@angular/core';
import {engineData} from '../../models/engineData';
import { Chart } from 'chart.js';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import { DataService } from '../../data-service/data.service'

@Component({
  selector: 'app-laut-chart',
  templateUrl: './laut-chart.component.html',
  styleUrls: ['./laut-chart.component.css']
})
export class LautChartComponent implements OnInit {

  constructor(
    private dataService: DataService,
  ) { }

  data: engineData[];

  chart_laut = [];

  private Tavg_laut;
  private Datum;

  ngOnInit() {
    this.dataService.getData();
    this.dataService.dataChangeEvent.subscribe(data => {
    this.Tavg_laut = data.map(dataPoint => parseFloat(dataPoint.werte.Tavg_laut));
    this.Datum = data.map(dataPoint => this.parseDate(dataPoint.datum));
    this.make_laut_chart();
    });

    let namedChartAnnotation = ChartAnnotation;
    namedChartAnnotation["id"]="annotation";
    Chart.pluginService.register(namedChartAnnotation);
  }

  parseDate(date:string): Date{
    var parts = date.split(/\.|\s|:/);
    return new Date(Number(parts[2]),Number(parts[1]),Number(parts[0]),Number(parts[3]),Number(parts[4]),Number(parts[5]))
  }

  make_laut_chart(){
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
              display: false,
            },
            ticks: {
              fontColor: '#000000',
            },
            display: true,
            type: 'time',
            time: {
              displayFormats: {
                second: 'h:mm:ss'
              }
            }
          }],
          yAxes: [{
            gridLines: {
              color: '#000000',
              display: false,
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
  }

}

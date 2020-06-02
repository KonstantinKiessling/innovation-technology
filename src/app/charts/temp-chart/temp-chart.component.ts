import { Component, OnInit } from '@angular/core';
import {engineData} from '../../models/engineData';
import { Chart } from 'chart.js';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import { DataService } from '../../data-service/data.service'

@Component({
  selector: 'app-temp-chart',
  templateUrl: './temp-chart.component.html',
  styleUrls: ['./temp-chart.component.css']
})
export class TempChartComponent implements OnInit {

  constructor(private dataService: DataService) { }

  data: engineData[];

  chart_temp = [];

  private Tavg_temp;
  private Datum;

  ngOnInit(){
    this.dataService.getData();
    this.dataService.dataChangeEvent.subscribe(data => {
    this.Tavg_temp = data.map(dataPoint => parseFloat(dataPoint.werte.Tavg_temp));
    this.Datum = data.map(dataPoint => this.parseDate(dataPoint.datum));
    this.make_temp_chart();
    });

    let namedChartAnnotation = ChartAnnotation;
    namedChartAnnotation["id"]="annotation";
    Chart.pluginService.register( namedChartAnnotation);
  }


  parseDate(date:string): Date{
    var parts = date.split(/\.|\s|:/);
    return new Date(Number(parts[2]),Number(parts[1]),Number(parts[0]),Number(parts[3]),Number(parts[4]),Number(parts[5]))
  }

  make_temp_chart(){
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
              display: false,
            },
            ticks: {
              fontColor: '#e9edf2',
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
              color: '#e9edf2',
              display: false,
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
  }

}

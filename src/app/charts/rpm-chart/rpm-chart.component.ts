import { Component, OnInit } from '@angular/core';
import {engineData} from '../../models/engineData';
import { Chart } from 'chart.js';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import { DataService } from '../../data-service/data.service'

@Component({
  selector: 'app-rpm-chart',
  templateUrl: './rpm-chart.component.html',
  styleUrls: ['./rpm-chart.component.css']
})
export class RpmChartComponent implements OnInit {

  constructor(
    private dataService: DataService,
  ) { }

  data: engineData[];

  chart_rpm = [];

  private rpm;

  private Datum;

  ngOnInit(){
    this.dataService.getData();
    this.dataService.dataChangeEvent.subscribe(data => {
    this.rpm = data.map(dataPoint => Number(dataPoint.werte.Rpm));
    this.Datum = data.map(dataPoint => this.parseDate(dataPoint.datum));
    this.make_rpm_chart();
    });

    let namedChartAnnotation = ChartAnnotation;
    namedChartAnnotation["id"]="annotation";
    Chart.pluginService.register(namedChartAnnotation);
  }


  parseDate(date:string): Date{
    var parts = date.split(/\.|\s|:/);
    return new Date(Number(parts[2]),Number(parts[1]),Number(parts[0]),Number(parts[3]),Number(parts[4]),Number(parts[5]))
  }

  make_rpm_chart(){
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
        }
      }
    });
  }

}

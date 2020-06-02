import { Component, OnInit } from '@angular/core';
import {engineData} from '../../models/engineData';
import { Chart } from 'chart.js';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import { DataService } from '../../data-service/data.service'

@Component({
  selector: 'app-qualitaetsgrenze-chart',
  templateUrl: './qualitaetsgrenze-chart.component.html',
  styleUrls: ['./qualitaetsgrenze-chart.component.css']
})
export class QualitaetsgrenzeChartComponent implements OnInit {

  constructor(
    private dataService: DataService,
  ) { }

  data: engineData[];

  chart_qualitaetsgrenze = [];

  private Qualitaetsgrenze;
  private Datum;

  ngOnInit() {
    this.dataService.getData();
    this.dataService.dataChangeEvent.subscribe(data => {
    this.Qualitaetsgrenze = data.map(dataPoint => parseFloat(dataPoint.werte.Qualitaetsgrenze));
    this.Datum = data.map(dataPoint => this.parseDate(dataPoint.datum));
    this.make_qualitaetsgrenze_chart();
    });

    let namedChartAnnotation = ChartAnnotation;
    namedChartAnnotation["id"]="annotation";
    Chart.pluginService.register(namedChartAnnotation);
  }

  parseDate(date:string): Date{
    var parts = date.split(/\.|\s|:/);
    return new Date(Number(parts[2]),Number(parts[1]),Number(parts[0]),Number(parts[3]),Number(parts[4]),Number(parts[5]))
  }

  make_qualitaetsgrenze_chart(){
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
        }
      }
    });
  }

}

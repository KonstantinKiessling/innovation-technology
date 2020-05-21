import { Component, OnChanges, Input } from '@angular/core';
import {engineData,} from '../models/engineData'
import {engineValues} from '../models/engineValues'
import { Chart } from 'chart.js';

@Component({
  selector: 'app-app-area-chart',
  templateUrl: './app-area-chart.component.html',
  styleUrls: ['./app-area-chart.component.css']
})
export class AppAreaChartComponent implements OnChanges {

  @Input() data: engineData[];

  chart = [];
  
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
    
  
  parseDate(date:string): Date{
    var parts = date.split(/\.|\s|:/);
    return new Date(Number(parts[2]),Number(parts[1]),Number(parts[0]),Number(parts[3]),Number(parts[4]),Number(parts[5]))
  }

  makeChart(){
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.Datum,
        datasets: [
          { 
            data: this.rpm,
            borderColor: "#3cba9f",
            fill: false,
            showLine: true
          },
          { 
            data: this.Tavg_temp,
            borderColor: "#ffcc00",
            fill: false,
            showLine: true
          },
          {
            data: this.Tavg_laut,
            borderColor: "#3256a8",
            fill: false,
            showLine: true
          },
          {
            data: this.Tagv_vibr,
            borderColor: "#d40f0f",
            fill: false,
            showLine: true
          },
          {
            data: this.Qualitaetsgrenze,
            borderColor: "#e602cf",
            fill: false,
            showLine: true
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

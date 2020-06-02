import { Component, OnInit } from '@angular/core';
import {engineData} from '../../models/engineData';
import { Chart } from 'chart.js';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import { DataService } from '../../data-service/data.service'

@Component({
  selector: 'app-vibr-chart',
  templateUrl: './vibr-chart.component.html',
  styleUrls: ['./vibr-chart.component.css']
})
export class VibrChartComponent implements OnInit {

  constructor(private dataService: DataService) { }

  data: engineData[];

  chart_vibr = [];

  private Tagv_vibr;
  private Datum;

  ngOnInit(){
    document.getElementById('home').classList.add('active');
    document.getElementById('schmiermittel').classList.remove('active');
    document.getElementById('kugellagerlauf').classList.remove('active');
    document.getElementById('anlageninnenleben').classList.remove('active');
    document.getElementById('einstellungen').classList.remove('active');
    this.dataService.getData();
    this.dataService.dataChangeEvent.subscribe(data => {
    this.Tagv_vibr = data.map(dataPoint => parseFloat(dataPoint.werte.Tavg_vibr));
    this.Datum = data.map(dataPoint => this.parseDate(dataPoint.datum));
    this.make_vibr_chart();
    });

    let namedChartAnnotation = ChartAnnotation;
    namedChartAnnotation["id"]="annotation";
    Chart.pluginService.register(namedChartAnnotation);
  }


  parseDate(date:string): Date{
    var parts = date.split(/\.|\s|:/);
    return new Date(Number(parts[2]),Number(parts[1]),Number(parts[0]),Number(parts[3]),Number(parts[4]),Number(parts[5]))
  }

  make_vibr_chart(){
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
  }

}

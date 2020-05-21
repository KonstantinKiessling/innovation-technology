import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { engineData } from '../models/engineData';

@Component({
  selector: 'app-app-chart-container',
  templateUrl: './app-chart-container.component.html',
  styleUrls: ['./app-chart-container.component.css']
})
export class AppChartContainerComponent implements OnInit {

  url: string = 'http://it2wi1.if-lab.de/rest/mpr_fall1'
  data:engineData[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe((data:engineData[]) => {
      this.data = data;
    });
  }

}

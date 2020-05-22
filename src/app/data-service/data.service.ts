import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { engineData } from '../models/engineData';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService{

  url: string = 'http://it2wi1.if-lab.de/rest/mpr_fall1'
  data: engineData[];
  dataChangeEvent = new Subject<engineData[]>();

  constructor(private http: HttpClient) { }

  getData(){
    this.http.get(this.url).subscribe((data:engineData[]) => {
    this.data = data;
    this.dataChangeEvent.next(data)});
  }
}

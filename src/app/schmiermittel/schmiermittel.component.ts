import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service'

@Component({
  selector: 'app-schmiermittel',
  templateUrl: './schmiermittel.component.html',
  styleUrls: ['./schmiermittel.component.css']
})
export class SchmiermittelComponent implements OnInit {

  constructor(private dataService: DataService) { }

  private Tavg_temp;
  private schadensgraenzErreicht:boolean;
  private toleranzgrenzeErreicht:boolean;

  ngOnInit() {
    /*document.getElementById('home').classList.remove('active');
    document.getElementById('schmiermittel').classList.add('active');
    document.getElementById('kugellagerlauf').classList.remove('active');
    document.getElementById('anlageninnenleben').classList.remove('active');
    document.getElementById('einstellungen').classList.remove('active');
    Was hast du denn hier schon wieder gemacht Sven?*/

    this.dataService.getData()
    this.dataService.dataChangeEvent.subscribe(data => {
      this.Tavg_temp = data.map(dataPoint => parseFloat(dataPoint.werte.Tavg_temp));
    });
  }

  isTempTooHigh(){
    if(this.Tavg_temp.some(temp => temp > 150)){
      this.schadensgraenzErreicht = true;
    }
    else if(this.Tavg_temp.some(temp => temp > 75)){
      this.toleranzgrenzeErreicht = true;
    }
      
    
  }

}

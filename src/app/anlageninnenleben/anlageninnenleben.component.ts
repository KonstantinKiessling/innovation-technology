import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anlageninnenleben',
  templateUrl: './anlageninnenleben.component.html',
  styleUrls: ['./anlageninnenleben.component.css']
})
export class AnlageninnenlebenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.headerSelection();
  }

  headerSelection(){
    document.getElementById('home').classList.remove('active');
    document.getElementById('schmiermittel').classList.remove('active');
    document.getElementById('kugellagerlauf').classList.remove('active');
    document.getElementById('anlageninnenleben').classList.add('active');
    document.getElementById('einstellungen').classList.remove('active');
  }

}

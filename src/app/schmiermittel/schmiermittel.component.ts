import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schmiermittel',
  templateUrl: './schmiermittel.component.html',
  styleUrls: ['./schmiermittel.component.css']
})
export class SchmiermittelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('home').classList.remove('active');
    document.getElementById('schmiermittel').classList.add('active');
    document.getElementById('kugellagerlauf').classList.remove('active');
    document.getElementById('anlageninnenleben').classList.remove('active');
    document.getElementById('einstellungen').classList.remove('active');
  }

}

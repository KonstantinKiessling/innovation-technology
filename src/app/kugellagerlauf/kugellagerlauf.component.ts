import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kugellagerlauf',
  templateUrl: './kugellagerlauf.component.html',
  styleUrls: ['./kugellagerlauf.component.css']
})
export class KugellagerlaufComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('home').classList.remove('active');
    document.getElementById('schmiermittel').classList.remove('active');
    document.getElementById('kugellagerlauf').classList.add('active');
    document.getElementById('anlageninnenleben').classList.remove('active');
    document.getElementById('einstellungen').classList.remove('active');
  }

}

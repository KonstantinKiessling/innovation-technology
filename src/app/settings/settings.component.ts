import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('home').classList.remove('active');
    document.getElementById('schmiermittel').classList.remove('active');
    document.getElementById('kugellagerlauf').classList.remove('active');
    document.getElementById('anlageninnenleben').classList.remove('active');
    document.getElementById('einstellungen').classList.add('active');
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { SchmiermittelComponent } from './schmiermittel/schmiermittel.component';
import { KugellagerlaufComponent } from './kugellagerlauf/kugellagerlauf.component';
import { AnlageninnenlebenComponent } from './anlageninnenleben/anlageninnenleben.component';
import { RpmChartComponent } from './charts/rpm-chart/rpm-chart.component';
import { TempChartComponent } from './charts/temp-chart/temp-chart.component';
import { LautChartComponent } from './charts/laut-chart/laut-chart.component';
import { VibrChartComponent } from './charts/vibr-chart/vibr-chart.component';
import { QualitaetsgrenzeChartComponent } from './charts/qualitaetsgrenze-chart/qualitaetsgrenze-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SettingsComponent,
    SchmiermittelComponent,
    KugellagerlaufComponent,
    AnlageninnenlebenComponent,
    RpmChartComponent,
    TempChartComponent,
    LautChartComponent,
    VibrChartComponent,
    QualitaetsgrenzeChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

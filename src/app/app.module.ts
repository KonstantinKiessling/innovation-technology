import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppAreaChartComponent } from './app-area-chart/app-area-chart.component';
import { AppChartContainerComponent } from './app-chart-container/app-chart-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AppAreaChartComponent,
    AppChartContainerComponent
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

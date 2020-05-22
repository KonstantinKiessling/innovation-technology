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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SettingsComponent,
    SchmiermittelComponent,
    KugellagerlaufComponent,
    AnlageninnenlebenComponent
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { AnlageninnenlebenComponent } from './anlageninnenleben/anlageninnenleben.component';
import { KugellagerlaufComponent } from './kugellagerlauf/kugellagerlauf.component';
import { SchmiermittelComponent } from './schmiermittel/schmiermittel.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Einstellungen', component: SettingsComponent},
  {path: 'Anlageninnenleben', component: AnlageninnenlebenComponent},
  {path: 'Kugellagerlauf', component: KugellagerlaufComponent},
  {path: 'Schmiermittel', component: SchmiermittelComponent},
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

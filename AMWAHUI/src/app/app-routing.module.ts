import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvgUsStatesComponent } from './components/us-states/svg-us-states/svg-us-states.component';
import {
  StateCensusData,
  StateCountyandCityCensusData,
} from 'src/app/services/state-census-data.service';

const routes: Routes = [
{ path: 'states-component', component: SvgUsStatesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  StateCensusDataService,
  StateCensusData,
  StateCountyandCityCensusData,
} from 'src/app/services/state-census-data.service';
const routes: Routes = [
  {

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

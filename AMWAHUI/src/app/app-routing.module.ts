import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SvgUsStatesComponent } from './components/us-states/svg-us-states/svg-us-states.component';
import { StateCountiesCensusListComponent} from './components/state/state-counties-census-list/state-counties-census-list.component';
import { UsCountiesCensusListComponent } from './components/us-counties/us-counties-census-list/us-counties-census-list.component';
import { StatesCensusListComponent } from './components/us-states/states-census-list/states-census-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routess: Routes =[
  { path: 'states-component', component: SvgUsStatesComponent },
  { path: 'state-counties', component: StateCountiesCensusListComponent }, 
  { path: 'us-counties', component: UsCountiesCensusListComponent },
  { path: 'states-list', component: StatesCensusListComponent },

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routess)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

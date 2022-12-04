import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SvgUsStatesComponent } from './components/us-states/svg-us-states/svg-us-states.component';
import { StateCountiesCensusListComponent} from './components/state/state-counties-census-list/state-counties-census-list.component';
import { UsCountiesCensusListComponent } from './components/us-counties/us-counties-census-list/us-counties-census-list.component'; 
import { StatesCensusListComponent } from './components/us-states/states-census-list/states-census-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const appRoutes: Routes =[
  { path: 'states-component', component: SvgUsStatesComponent },
  { path: 'st-counties', component: StateCountiesCensusListComponent }, 
  { path: 'us-counties', component: UsCountiesCensusListComponent },
  { path: 'us-states', component: StatesCensusListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})export class AppRoutingModule { }

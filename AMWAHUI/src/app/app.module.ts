import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StateCountiesCensusListComponent } from './components/state/state-counties-census-list/state-counties-census-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SvgStateCountiesComponent } from './components/state/svg-state-counties/svg-state-counties.component';
import { StatesCensusListComponent } from './components/us-states/states-census-list/states-census-list.component';
import { UsCountiesCensusListComponent } from './components/us-counties/us-counties-census-list/us-counties-census-list.component';
import { SvgUsStatesComponent } from './components/us-states/svg-us-states/svg-us-states.component';
import { SvgUsCountiesComponent } from './components/us-counties/svg-us-counties/svg-us-counties.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    StateCountiesCensusListComponent,
    SvgStateCountiesComponent,
    StatesCensusListComponent,
    SvgUsStatesComponent,
    SvgUsCountiesComponent,
    UsCountiesCensusListComponent
  ],
  // providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  //const routes: Routes = [];
 }

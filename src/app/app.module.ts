import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StateCountiesCensusListComponent } from './components/state/state-counties-census-list/state-counties-census-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SvgStateCountiesComponent } from './components/state/svg-state-counties/svg-state-counties.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    StateCountiesCensusListComponent,
    SvgStateCountiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

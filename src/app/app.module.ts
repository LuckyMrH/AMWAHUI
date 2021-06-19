import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
<<<<<<< HEAD
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
=======
import { StateCountiesCensusListComponent } from './components/state/state-counties-census-list/state-counties-census-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SvgStateCountiesComponent } from './components/state/svg-state-counties/svg-state-counties.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    StateCountiesCensusListComponent,
    SvgStateCountiesComponent
>>>>>>> bb7c04942761fd86ff04c5b4cf30c35f44863f1c
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

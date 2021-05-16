import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as mime from 'mime-types';
@Injectable({
  providedIn: 'root',
})
export class StateCensusDataService {
  private statesCensusDataURI = 'http://localhost:8080/census/states';
  private countiesCensusDataURI = 'http://localhost:8080/census/counties';
  private statesSVGdataURI = 'http://localhost:8080/svg/us_states';
  private countiesSVGdataURI = 'http://localhost:8080/svg/us_counties';
  private countySVGdataURI = 'http://localhost:8080/svg/state_counties';
  private stateCountyDataURI = 'http://localhost:8080/census/county_data';

  private _statesCensusData = new BehaviorSubject<StateCensusData[]>([]);
  private _countiesCensusData = new BehaviorSubject<CountyCensusData[]>([]);
  private _stateCountyandCityCensusData = new BehaviorSubject<StateCountyandCityCensusData[]>([]);
  private _statesSVGdata = new BehaviorSubject<StateSVGdata[]>([]);
  private _countiesSVGdata = new BehaviorSubject<CountySVGdata[]>([]);

  private stateCountyandCityCensusDataStore: { stateCountyandCityCensusData: StateCountyandCityCensusData[] } = {
    stateCountyandCityCensusData: [],
  };

  private statesCensusDataStore: { statesCensusData: StateCensusData[] } = {
    statesCensusData: [],
  };
  private countiesCensusDataStore: { countiesCensusData: CountyCensusData[] } = {
    countiesCensusData: [],
  };
  private statesSvgDataStore: { statesSVGdata: StateSVGdata[] } = {
    statesSVGdata: [],
  };
  private countiesSvgDataStore: { countieSVGdata: CountySVGdata[] } = {
    countieSVGdata: [],
  };

  readonly stateCountyandCityCensusData = this._stateCountyandCityCensusData.asObservable();
  readonly statesCensusData = this._statesCensusData.asObservable();
  readonly countiesCensusData = this._countiesCensusData.asObservable();
  readonly statesSVGdata = this._statesSVGdata.asObservable();
  readonly countiesSVGdata = this._countiesSVGdata.asObservable();

  constructor(private httpClient: HttpClient) {
    this.loadAllCountiesSVGdata();
    this.loadAllStatesSVGdata();
    this.loadAllCountyCensusData();
    this.loadAllStateCensusData();
  }

  // private statesCensusDataURI = 'http://localhost:8080/census/states';
  // private countiesCensusDataURI = 'http://localhost:8080/census/counties';
  // private statesSVGdataURI = 'http://localhost:8080/svg/us_states';
  // private countiesSVGdataURI = 'http://localhost:8080/svg/us_counties';


  loadStateCountyandCityCensusData(stateFipsCode: string) {
    // private stateCountyDataURI = 'http://localhost:8080/census/county_data';
    const url = `${this.stateCountyDataURI}/${stateFipsCode}`;
    this.httpClient.get<StateCountyandCityCensusData[]>(url).subscribe(
      (data) => {
        this.stateCountyandCityCensusDataStore.stateCountyandCityCensusData = data;
        this._stateCountyandCityCensusData.next(
          Object.assign({}, this.stateCountyandCityCensusDataStore).stateCountyandCityCensusData
        );
      },
      (error) => console.log('Could not load Counties SVG Data for State:' + stateFipsCode)
    );
  }

  loadStateCountySVGdata(stateFipsCode: string) {
    // private countySVGdataURI = 'http://localhost:8080/svg/state_counties';
    const url = `${this.countySVGdataURI}/${stateFipsCode}`;
    this.httpClient.get<CountySVGdata[]>(url).subscribe(
      (data) => {
        this.countiesSvgDataStore.countieSVGdata = data;
        this._countiesSVGdata.next(
          Object.assign({}, this.countiesSvgDataStore).countieSVGdata
        );
      },
      (error) => console.log('Could not load Counties SVG Data for State:' + stateFipsCode)
    );
  }

  loadAllStateCensusData() {

    this.httpClient.get<StateCensusData[]>(this.statesCensusDataURI).subscribe(
      (data) => {
        this.statesCensusDataStore.statesCensusData = data;
        this._statesCensusData.next(
          Object.assign({}, this.statesCensusDataStore).statesCensusData
        );
      },
      (error) => console.log('Could not load State Census Data')
    );
  }

  loadAllCountyCensusData() {
    this.httpClient.get<CountyCensusData[]>(this.countiesCensusDataURI).subscribe(
      (data) => {
        this.countiesCensusDataStore.countiesCensusData = data;
        this._countiesCensusData.next(
          Object.assign({}, this.countiesCensusDataStore).countiesCensusData
        );
      },
      (error) => console.log('Could not load County Census Data')
    );
  }

  loadAllStatesSVGdata() {
    this.httpClient.get<StateSVGdata[]>(this.statesSVGdataURI).subscribe(
      (data) => {
        this.statesSvgDataStore.statesSVGdata = data;
        this._statesSVGdata.next(
          Object.assign({}, this.statesSvgDataStore).statesSVGdata
        );
      },
      (error) => console.log('Could not load States SVG Data')
    );
  }

  loadAllCountiesSVGdata() {
    this.httpClient.get<CountySVGdata[]>(this.countiesSVGdataURI).subscribe(
      (data) => {
        this.countiesSvgDataStore.countieSVGdata = data;
        this._countiesSVGdata.next(
          Object.assign({}, this.countiesSvgDataStore).countieSVGdata
        );
      },
      (error) => console.log('Could not load US Counties SVG Data.')
    );

  }


}

export interface StateCountyandCityCensusData extends CountyCensusData {
  cities: CityCensusData[];
}

export interface CityCensusData {
  cityName: string;
  statePostalCode: string;
  stateName: string;
  stateCountyFipsCode: string;
  stateCountyFipsAllCds: string;
  countyName: string;
  countyNamesAll: string;
  latitue: number;
  longitude: number;
  population: number;
  popDensity: number;
  military: boolean;
  incorporated: boolean;
  timezone: string;
  ranking: number;
  zipCodes: string;
}

export interface CountyCensusData {
  id: number;
  stateCountyFipsCode: string;
  stateFipsCode: string;
  countyFipsCode: string;
  stateName: string;
  statePostalCode: string;
  countyName: string;
  numberOfCities: number;
  census2010POP: number;
  populationEstimate2019: number;
  domesticMigration2010: number;
  domesticMigration2019: number;
  internationalMigration2010: number;
  internationalMigration2019: number;
  totalMigration2019: number;
  landAreaSqMi: number;
  fillColor: string,
}

export interface StateCensusData {
  id: number;
  stateFipsCode: string;
  stateName: string;
  postalCode: string;
  numberOfCounties: number;
  census2010POP: number;
  populationEstimate2019: number;
  domesticMigration2010: number;
  domesticMigration2019: number;
  internationalMigration2010: number;
  internationalMigration2019: number;
  landAreaSqMi: number;
  fillColor: string;
}

export interface StateSVGdata {
  stateFipsCode: string;
  stateName: string;
  abbreviation: string;
  postalCode: string;
  id: number;
  stateCode: string;
  stateSvgOrder: number;
  pathTitleTag: string;
  pathD: string;
  moveToX: number;
  moveToY: number;
  transformX: number;
  transformY: number;
  viewBoxX: number;
  viewBoxY: number;
  viewBoxWidth: number;
  viewBoxHeight: number;
  fillColor: string;
}

export interface CountySVGdata {
  id: number;
  stateCode: string;
  countyName: string;
  countySvgOrder: number;
  pathTitleTag: string;
  pathTitleTagId: string;
  pathId: string;
  pathDdata: string;
  pathStyle: string;
  moveToXval: number;
  moveToYval: number;
  countyFipsCode: string;
  stateCountyFipsCode: string;
  stateFipsCode: string;
  fillColor: string;
}


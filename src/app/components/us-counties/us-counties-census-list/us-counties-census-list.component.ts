import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  StateCensusDataService,
  StateCountyandCityCensusData,
  CountyCensusData,
} from 'src/app/services/state-census-data.service';
import {
  HoverService,
  HoverMessage,
} from 'src/app/services/hover.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-us-counties-census-list',
  templateUrl: './us-counties-census-list.component.html',
  styleUrls: ['./us-counties-census-list.component.css'],
  providers: [HoverService],
})
export class UsCountiesCensusListComponent implements OnInit, AfterViewInit, OnDestroy {
  dataSource = new MatTableDataSource<CountyCensusData>();
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator? : MatPaginator;
  @ViewChild(MatSort) sort? : MatSort;
  subscription: Subscription;
  public selectedCounty? : CountyCensusData;
  public backgroundColor = '#dfdfdf';
  public hoverColor = 'blueviolet'; // 'red'; // 'lightsteelblue';
  screenHeight? : number;
  screenWidth? : number;


  constructor(
    private dataService: StateCensusDataService,
    private route: ActivatedRoute,
    private hoverService: HoverService
  ) {
    this.getScreenSize();
    this.subscription = hoverService.mapChanged$.subscribe(
      (msg: HoverMessage) => {
        for (const cnt in this.dataSource.data) {
          if (this.dataSource.data[cnt].stateCountyFipsCode === msg.fipsCode) {

            this.dataSource.data[cnt].fillColor = msg.colorCode;
          }
        }
      }
    );

  }

  @HostListener('window:resizze', ['$event'])
  getScreenSize(event? : Event) {
    this.screenWidth = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    // this.stateCensusFipsCode = this.route.snapshot.paramMap.get('stateFipsCode');
    this.displayedColumns = [
      'position',
      'countyName',
      'stateName',
      'statePostalCode',
      'numberOfCities',
      'landAreaSqMi',
      'populationEstimate2019',
      'totalMigration2019',
      'domesticMigration2019',
      'internationalMigration2019',
    ];

    this.dataService.countiesCensusData.subscribe((data) => {
      this.dataSource.data = data;
    });

    // this.dataService.loadStateCountyandCityCensusData(this.stateCensusFipsCode);
    //this.dataService.loadAllCountyCensusData();
  }
  applyHover(stateCountyFipsCode: string) {
    this.hoverService.announceListChanged(stateCountyFipsCode, this.hoverColor);
  }

  removeHover(stateCountyFipsCode: string) {
    this.hoverService.announceListChanged(stateCountyFipsCode, this.backgroundColor);
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnDestroy() {
  }
}

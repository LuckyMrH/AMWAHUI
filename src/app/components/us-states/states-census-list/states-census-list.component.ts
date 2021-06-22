import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  StateCensusDataService,
  StateCensusData,
} from 'src/app/services/state-census-data.service';
import {
  HoverService,
  HoverMessage,
} from 'src/app/services/hover.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-states-census-list',
  templateUrl: './states-census-list.component.html',
  styleUrls: ['./states-census-list.component.css'],
  providers: [HoverService]
})

export class StatesCensusListComponent
  implements OnInit, AfterViewInit, OnDestroy {

  dataSource = new MatTableDataSource<StateCensusData>();

  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator? : MatPaginator;
  @ViewChild(MatSort) sort? : MatSort;
  subscription: Subscription;
  public selectedState? : StateCensusData;
  public backgroundColor = '#dfdfdf';
  public hoverColor = 'lightsteelblue';
  screenHeight : number = 0;
  screenWidth : number = 0;

  constructor(
    // private http: HttpClient,
    // private route: ActivatedRoute,
    private statesService: StateCensusDataService,
    private hoverService: HoverService,
    private router: Router,
  ) {
    this.getScreenSize(evebt? : Event);

    this.subscription = hoverService.mapChanged$.subscribe(
      (msg: HoverMessage) => {
        for (const cnt in this.dataSource.data) {
          if (this.dataSource.data[cnt].stateFipsCode === msg.fipsCode) {
            // console.log("State List: We got a message about:" + msg.stateFipsCode + " background-color:" + msg.color);
            this.dataSource.data[cnt].fillColor = msg.colorCode;
          }
        }
      }
    );
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event : Event) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log("screensize: " + this.screenWidth + ":" + this.screenHeight);
  }

  ngOnInit(): void {
    this.displayedColumns = [
      'position',
      'stateName',
      'postalCode',
      'numberOfCounties',
    ];
    if (this.screenWidth > 359 * 2) { this.displayedColumns.push('landAreaSqMi') };
    if (this.screenWidth > 439 * 2) { this.displayedColumns.push('populationEstimate2019') };
    if (this.screenWidth > 524 * 2) { this.displayedColumns.push('domesticMigration2019') };
    if (this.screenWidth > 614 * 2) { this.displayedColumns.push('internationalMigration2019') };

    this.statesService.statesCensusData.subscribe((data) => {
      this.dataSource.data = data;
    });


  }
  goToState(stateFipsCode: string) {
    this.router.navigate(['/state-counties', stateFipsCode]);
  }
  applyHover(stateFipsCode: string) {
    this.hoverService.announceListChanged(stateFipsCode, this.hoverColor);
  }

  removeHover(stateFipsCode: string) {
    this.hoverService.announceListChanged(stateFipsCode, this.backgroundColor);
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
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}

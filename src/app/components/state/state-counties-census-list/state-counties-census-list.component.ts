import {
    Component,
    OnInit,
    ViewChild,
    AfterViewInit,
    OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
    StateCensusDataService,
    StateCensusData,
    StateCountyandCityCensusData,
} from 'src/app/services/state-census-data.service';
import {
    HoverService,
    HoverMessage,
} from 'src/app/services/hover.service';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'state-counties-census-list',
    templateUrl: './state-counties-census-list.component.html',
    styleUrls: ['./state-counties-census-list.component.css'],
    providers: [HoverService],
})
export class StateCountiesCensusListComponent implements OnInit, AfterViewInit, OnDestroy {
    displayedColumns!: string[];
    dataSource = new MatTableDataSource<StateCountyandCityCensusData>();
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    subscription: Subscription;

    screenHeight!: number;
    screenWidth!: number;
    stateFipsCode!: string | null;
    stateData!: StateCensusData;

    public backgroundColor = '#dfdfdf';
    public hoverColor = 'lightsteelblue';

    constructor(
        private dataService: StateCensusDataService,
        private hoverService: HoverService,
        private route: ActivatedRoute,
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
    @HostListener('window:resize', ['$event'])
    getScreenSize(event?: Event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
    }
    ngOnInit(): void {
        this.displayedColumns = [
            // id: number;
            //'stateCountyFipsCode',
            // stateFipsCode: string;
            // countyFipsCode: string;
            'stateName',
            //'statePostalCode',
            'position',
            'countyName',
            'numberOfCities',
            'landAreaSqMi',
            'populationEstimate2019',
            //'domesticMigration2019',
            //'internationalMigration2019',
            //'totalMigration2019',

        ];

        this.stateFipsCode = this.route.snapshot.paramMap.get('stateFipsCode');
        console.log('We are going to load the state for - ' + this.stateFipsCode);
        this.dataService.statesCensusData.subscribe((statesdata) => {
            this.stateData = statesdata.filter((s) => s.stateFipsCode === this.stateFipsCode)[0];
        });
        this.dataService.loadAllStateCensusData();
        if (this.stateFipsCode != null) {
            this.dataService.loadStateCountyandCityCensusData(this.stateFipsCode);
        }
        this.dataService.stateCountyandCityCensusData.subscribe((data) => {
            this.dataSource.data = data;
        });
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

    ngOnDestroy(): void {
        // throw new Error('Method not implemented.');
        // subscription.un
    }
}

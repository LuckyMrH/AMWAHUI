
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    StateCensusDataService,
    CountySVGdata,
    StateSVGdata,
    StateCensusData
} from 'src/app/services/state-census-data.service';
import { HttpClient } from '@angular/common/http';
import { HoverService, HoverMessage } from 'src/app/services/hover.service';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-svg-state-counties',
    templateUrl: './svg-state-counties.component.html',
    styleUrls: ['./svg-state-counties.component.css']
})
export class SvgStateCountiesComponent implements OnInit {
<<<<<<< HEAD
    countiesSvgData: CountySVGdata[] = [];
    stateSvgData!: StateSVGdata;
    stateCensusData!: StateCensusData;
    subscription!: Subscription
    stateFipsCode!: string | null;
    public backgroundColor = '';
    public hoverColor = 'lightsteelblue';
=======
  countiesSvgData: CountySVGdata[] = [];
  stateSvgData!: StateSVGdata;
stateCensusData!: StateCensusData;
  subscription!: Subscription
  stateFipsCode: string = '';
  public backgroundColor = '';
  public hoverColor = 'lightsteelblue';
>>>>>>> 10b2fbbe2bc28153e4702985772b37c47efa0bde

    constructor(
        private dataService: StateCensusDataService,
        private hoverService: HoverService,
        private route: ActivatedRoute,
    ) {
        this.subscription = hoverService.listChanged$.subscribe(
            (msg: HoverMessage) => {
                for (const cnt in this.countiesSvgData) {
                    if (this.countiesSvgData[cnt].stateCountyFipsCode === msg.fipsCode) {
                        this.countiesSvgData[cnt].fillColor = msg.colorCode;
                    }
                }
            }
        );
    }


    applyHover(stateCountyFipsCode: string) {
        // console.log('We are over ' + stateCd);
        this.hoverService.announceMapChanged(stateCountyFipsCode, this.hoverColor);
    }

    removeHover(stateCountyFipsCode: string) {
        // console.log('We are leaving ' + stateCd);
        this.hoverService.announceMapChanged(stateCountyFipsCode, this.backgroundColor);
    }

    ngOnInit(): void {
        this.stateFipsCode = this.route.snapshot.paramMap.get('stateFipsCode');
        // console.log('svg-state-counties: going to load the state for - FIPS:' + this.stateFipsCode);
        // this.dataService.countiesSVGdata.subscribe((data) => {
        //   this.countiesSvgData = data;
        // });
        this.dataService.statesCensusData.subscribe((statesdata) => {
            this.stateCensusData = statesdata.filter((s) => s.stateFipsCode === this.stateFipsCode)[0]
        });
        this.dataService.countiesSVGdata.subscribe((counties) => {
            this.countiesSvgData = counties.filter((cnty) =>
                cnty.stateFipsCode === this.stateFipsCode)
        });
        this.dataService.statesSVGdata.subscribe((stateSvg) => {
            this.stateSvgData = stateSvg.filter((state) =>
                state.stateFipsCode === this.stateFipsCode)[0]
        });

        this.dataService.statesCensusData.subscribe((states) => {
            this.stateCensusData = states.filter((state) =>
                this.stateCensusData.stateFipsCode === this.stateFipsCode)[0]
        });

        //this.dataService.loadStateCountySVGdata(this.stateFipsCode);
        // console.log('The state name is:' + this.stateData.stateName + ", the FIPS code is:" + this.stateData.stateFipsCode);
    }
}

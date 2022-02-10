import { Component, OnInit } from '@angular/core';
import {
  StateCensusDataService,
  CountySVGdata,
} from 'src/app/services/state-census-data.service';
import { HoverService, HoverMessage } from 'src/app/services/hover.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-svg-us-counties',
  templateUrl: './svg-us-counties.component.html',
  styleUrls: ['./svg-us-counties.component.css']
})
export class SvgUsCountiesComponent implements OnInit {
  countiesSvgData: CountySVGdata[] = [];
  subscription: Subscription;
  //The Colors defined to send to the component list
  // We remove the background color to change the list back to
  // transparent
  public backgroundColor = '';
  public hoverColor = 'lightsteelblue';

  constructor(
    private dataService: StateCensusDataService,
    private hoverService: HoverService,
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
    this.hoverService.announceMapChanged(stateCountyFipsCode, this.hoverColor);

  }

  removeHover(stateCountyFipsCode: string) {
    this.hoverService.announceMapChanged(stateCountyFipsCode, this.backgroundColor);
  }

  ngOnInit(): void {
    if (!this.countiesSvgData || this.countiesSvgData.length === 0) {
      this.dataService.countiesSVGdata.subscribe((data) => {
        this.countiesSvgData = data;
      });

      // this.dataService.loadAllCountiesSVGdata();
    }

  }

}

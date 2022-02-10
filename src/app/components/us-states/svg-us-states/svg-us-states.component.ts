import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  StateCensusDataService,
  StateSVGdata,
} from 'src/app/services/state-census-data.service';
import {
  HoverService,
  HoverMessage,
} from 'src/app/services/hover.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-svg-us-states',
  templateUrl: './svg-us-states.component.html',
  styleUrls: ['./svg-us-states.component.css'],
})
export class SvgUsStatesComponent implements OnInit {
  statesSvgData: StateSVGdata[] = [];
  subscription: Subscription;

  //The Colors defined to send to the component list
  // We remove the background color to change the list back to
  // transparent
  public backgroundColor = '';
  public hoverColor = 'lightsteelblue';

  constructor(
    private stateService: StateCensusDataService,
    private hoverService: HoverService,
    private router: Router,
  ) {
    this.subscription = hoverService.listChanged$.subscribe(
      (msg: HoverMessage) => {
        for (const cnt in this.statesSvgData) {
          if (this.statesSvgData[cnt].stateFipsCode === msg.fipsCode) {
            this.statesSvgData[cnt].fillColor = msg.colorCode;
            // console.log("State SVG: We got a message about:" + msg.fipsCode + " background-color:" + msg.colorCode);

          }
        }
      }
    );
  }

  applyHover(stateFipsCode: string) {
    // console.log('State SVG: We are over ' + stateFipsCode);
    this.hoverService.announceMapChanged(stateFipsCode, this.hoverColor);
  }

  removeHover(stateFipsCode: string) {
    // console.log('We are leaving ' + stateCd);
    this.hoverService.announceMapChanged(stateFipsCode, this.backgroundColor);
  }

  statesSvgDataExceptDC(): StateSVGdata[] {
    const result = this.statesSvgData.filter((s) => s.stateCode !== 'DC');
    return result;
  }

  statesSvgDataForDC(): StateSVGdata[] {
    const result = this.statesSvgData.filter((s) => s.stateCode === 'DC');
    return result;
  }

  goToState(stateFipsCode: string) {
    this.router.navigate(['/state-counties', stateFipsCode]);
  }
  // announceStateHover(stateFipsCode) {
  //   this.stateHoverService.announceMapChanged(stateFipsCode);
  // }

  ngOnInit(): void {
    // console.log('svg-us-states component ngOnInit before calling service.');

    if (!this.statesSvgData || this.statesSvgData.length === 0) {
      this.stateService.statesSVGdata.subscribe((data) => {
        this.statesSvgData = data;
      });

      // this.stateService.loadAllStatesSVGdata();
    }

  }
}

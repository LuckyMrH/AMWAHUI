import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root',})
export class HoverService {
  // Observable string sources
  // sent when the hover has changed
  private listChangedSource = new Subject<HoverMessage>();
  private mapChangedSource = new Subject<HoverMessage>(); //<string[]>(); 

  // Observable string streams
  listChanged$ = this.listChangedSource.asObservable();
  mapChanged$ = this.mapChangedSource.asObservable();

  // Service message commands
  announceListChanged(fipsCd: string, colorCd: string) {
    let msg: HoverMessage = { fipsCode: fipsCd, colorCode: colorCd };
    this.listChangedSource.next(msg);
  }

  announceMapChanged(fipsCd: string, colorCd: string) {
    let msg: HoverMessage = { fipsCode: fipsCd, colorCode: colorCd };
    this.mapChangedSource.next(msg);
  }
}

export interface HoverMessage {
  fipsCode: string;
  colorCode: string;
}

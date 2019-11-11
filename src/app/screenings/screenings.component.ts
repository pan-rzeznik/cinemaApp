import { Emmission } from './../movie.model';
import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-screenings',
  templateUrl: './screenings.component.html',
  styleUrls: ['./screenings.component.scss']
})
export class ScreeningsComponent {
  @Input() emissions: Emmission[];
  dayLimit = 3;

  dateWithMomemt(date: number): string {
    const myDate = new Date(date * 1000);
    return moment(myDate.getTime()).locale('pl').format('dddd, L').toString();
  }

  showMoreDays(): void {
    this.dayLimit = this.dayLimit + 3;
  }

  showAllDays(): void {
    this.dayLimit = this.emissions.length;
  }

  hideAllDays(): void {
    this.dayLimit = 3;
  }

}

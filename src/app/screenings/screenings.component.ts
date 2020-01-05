import { Emmission } from './../movie.model';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-screenings',
  templateUrl: './screenings.component.html',
  styleUrls: ['./screenings.component.scss']
})
export class ScreeningsComponent implements OnInit{
  @Input() emissions: Emmission[];
  dayLimit = 3;
  smallScreen: boolean;

  ngOnInit() {
    window.innerWidth < 400 ? this.smallScreen = true : this.smallScreen = false;
  }

  dateWithMomemt(date: number): string {
    const myDate = new Date(date * 1000);
    return moment(myDate.getTime()).locale('pl').format('dddd, DD.MM').toString();
  }

  filterDays(dateSeconds: number): boolean {
    const today = new Date().setHours(0, 0, 0, 0) / 1000;
    if (dateSeconds < today) {
      return false;
    }
    return true;
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

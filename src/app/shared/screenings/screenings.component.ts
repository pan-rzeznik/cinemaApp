import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Emmission } from 'src/app/models/movie.model';

@Component({
  selector: 'app-screenings',
  templateUrl: './screenings.component.html',
  styleUrls: ['./screenings.component.scss']
})
export class ScreeningsComponent implements OnInit {
  @Input() previewMode: boolean;
  @Input() emissions: Emmission[];
  dayLimit = 3;
  smallScreen: boolean;

  ngOnInit() {
    window.innerWidth < 400 ? this.smallScreen = true : this.smallScreen = false;
  }
 
  dateWithMomemt(date: any): string {
    const myDate = this.previewMode ? new Date(date) : new Date(date * 1000);
    return moment(myDate.getTime()).locale('pl').format('dddd, DD.MM').toString();
  }

  filterDays(date: Date): boolean {
    const dateSeconds = new Date(date).getSeconds();
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

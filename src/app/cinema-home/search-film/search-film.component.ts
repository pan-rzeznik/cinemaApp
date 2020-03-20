import { DbService } from '../../shared/db.service';
import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.scss']
})
export class SearchFilmComponent {
  minDate = new Date();
  selectedDate: Date;


  displayDate: string; // Date in string for make capital letter in UI for day name.
                      // library doesnt support it in polish.

  constructor(private db: DbService) { }

  saveDate(date: Date): void {
    if (!date) { return; }
    this.selectedDate = date;
    this.displayDate = moment(date.getTime()).locale('pl').format('dddd, LL').toString();
    this.db.getMoviesByDate(this.selectedDate);
  }

}

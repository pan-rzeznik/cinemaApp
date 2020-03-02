import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DbService } from 'src/app/shared/db.service';

@Component({
  selector: 'app-filtered-films',
  templateUrl: './filtered-films.component.html',
  styleUrls: ['./filtered-films.component.scss']
})
export class FilteredFilmsComponent implements OnInit {
  date: any;
  fullDate: string;
  films = [];
  faSadTear = faSadTear;
  constructor(private readonly route: ActivatedRoute, private readonly db: DbService) { }

  ngOnInit() {
    const seconds = +this.route.snapshot.paramMap.get('date');
    this.date = new Date(seconds);
    this.db.getMoviesByDate(this.date).subscribe(res => this.films = res);
    setTimeout(() => {
      console.log(this.films);
    }, 3000);
    this.fullDate = moment(this.date.getTime()).locale('pl').format('dddd, LL');
  }

}

import { Emmission } from './../movie.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-screenings',
  templateUrl: './screenings.component.html',
  styleUrls: ['./screenings.component.scss']
})
export class ScreeningsComponent {
  @Input() emissions: Emmission[];
  dayLimit = 3;

  showMoreDays() {
    this.dayLimit = this.dayLimit + 3;
  }

  showAllDays() {
    this.dayLimit = this.emissions.length;
  }

  hideAllDays() {
    this.dayLimit = 3;
  }

}

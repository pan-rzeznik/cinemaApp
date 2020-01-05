import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() ratingScore: number;
  fullStars: number[];
  halfStars: number[];
  emptyStarts: number[];

  constructor() { }

  ngOnInit() {
    this.countStars();
  }

  countStars() {
  const score = Math.round(this.ratingScore);
  if (score % 2 === 0) {
      this.fullStars = Array(score / 2).fill(0);
      this.halfStars = Array(0).fill(0);
      this.emptyStarts = Array(5 - this.fullStars.length).fill(0);
    } else {
      this.fullStars = Array((score - 1 ) / 2).fill(0);
      this.halfStars = Array(1).fill(0);
      this.emptyStarts = Array(5 - this.fullStars.length - this.halfStars.length).fill(0);
    }
  }

}

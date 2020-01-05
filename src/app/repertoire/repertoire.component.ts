import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { DbService } from '../db.service';

@Component({
  selector: 'app-repertoire',
  templateUrl: './repertoire.component.html',
  styleUrls: ['./repertoire.component.scss']
})
export class RepertoireComponent {
  movieList: Movie[];
  constructor(private db: DbService, private readonly router: Router) {
  }

  ngOnInit(): void {
    if (this.router.url.includes('upcomming')) {
      this.scrollToAnchor('upcomming', 700)
    }
  }
  scrollToAnchor(location: string, wait: number): void {
    const element = document.querySelector('#' + location)
    if (element) {
      setTimeout(() => {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
             top: offsetPosition,
             behavior: 'smooth'
        });
      }, wait)
    }
  }
}
 
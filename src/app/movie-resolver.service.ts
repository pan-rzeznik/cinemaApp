import { DbService } from './db.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieResolverService implements Resolve<any> {

  constructor(private db: DbService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const movieId = route.paramMap.get('filmId');
    return this.db.getMovieById(movieId).pipe(first());
  }
}

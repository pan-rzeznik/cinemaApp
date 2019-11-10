import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Movie } from './movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private fire: AngularFirestore) {}

  addNewFilm(formData): void {
    const movie = {
    title: formData.filmDetails.title,
    description: formData.filmDetails.description,
    duration: formData.filmDetails.duration,
    rating: formData.filmDetails.rating,
    age: formData.filmDetails.age,
    director: formData.filmDetails.director,
    mainPoster: formData.filmDetails.mainPoster,
    backgroundImg: formData.filmDetails.backgroundImg,
    type: formData.filmDetails.type,
    emissions: formData.emmissionsList
    };
    this.fire.collection('movies').add(movie);
  }

  getAllMovies() {
   return this.fire.collection('movies').snapshotChanges().pipe(
      map(snapshot => {
        return snapshot.map( s => {
          return {
            id: s.payload.doc.id,
            ...s.payload.doc.data()
          };
        });
      })
    );
  }

  getMovieById(id: string): Observable<any> {
    return this.fire.doc(`movies/${id}`).valueChanges();
  }

  // filterByDate(date: Date): Movie[] {
  //   const filteredMovies: Movie[] = [];

  //   this.movies.forEach(movie => {
  //     const state = movie.emissions.some( d => d.date.getTime() === date.getTime());
  //     if (state) {
  //       filteredMovies.push(movie);
  //     }
  //   });
  //   return filteredMovies;
  // }
}

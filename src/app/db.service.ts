import {
  Router
} from '@angular/router';
import {
  Injectable
} from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import {
  map,
  tap
} from 'rxjs/operators';
import {
  Movie
} from './movie.model';
import {
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private readonly fire: AngularFirestore,
              private readonly router: Router) {}

  addNewFilm(formData): void {
    const movie: Movie = {
      title: formData.filmDetails.title,
      description: formData.filmDetails.description,
      duration: formData.filmDetails.duration,
      rating: formData.filmDetails.rating,
      role: formData.filmDetails.role,
      age: formData.filmDetails.age,
      director: formData.filmDetails.director,
      mainPoster: formData.filmDetails.mainPoster,
      backgroundImg: formData.filmDetails.backgroundImg,
      type: formData.filmDetails.type,
      trailers: [formData.filmDetails.firstTrailer, formData.filmDetails.secondTrailer],
      emissions: formData.emmissionsList,
      emissionsDays: formData.emmissionsList.map(e => e.date)
    };
    this.fire.collection('movies').add(movie);
  }

  getAllMovies(): Observable < any > {
    return this.fire.collection('movies').snapshotChanges().pipe(
      map(snapshot => {
        return snapshot.map(s => {
          return {
            id: s.payload.doc.id,
            ...s.payload.doc.data()
          };
        });
      })
    );
  }

  getMovieById(id: string): Observable < any > {
    return this.fire.doc(`movies/${id}`).valueChanges();
  }

  getMoviesByDate(date: Date) {
    this.router.navigate(['/wyszukiwarka', date.getTime()]);
    const collection = this.fire.collection('movies', ref => ref.where('emissionsDays', 'array-contains', date))
      .snapshotChanges().pipe(
        map(snapshot => {
          return snapshot.map(s => {
            return {
              id: s.payload.doc.id,
              ...s.payload.doc.data()
            };
          });
        })
      );
    // .subscribe(res => console.log(res));
    return collection;
  }

  getUpcommingMovies() {
    const collection = this.fire.collection('movies', ref => ref.where('role', '==', 'upcoming'))
      .snapshotChanges().pipe(
        map(snapshot => {
          return snapshot.map(s => {
            return {
              id: s.payload.doc.id,
              ...s.payload.doc.data()
            };
          });
        })
      );
    // .subscribe(res => console.log(res));
    return collection;
  }


  getCurrentMovies() {
    const collection = this.fire.collection('movies', ref => ref.where('role', '==', 'play'))
      .snapshotChanges().pipe(
        map(snapshot => {
          return snapshot.map(s => {
            return {
              id: s.payload.doc.id,
              ...s.payload.doc.data()
            };
          });
        }),
        tap((movies: Movie[]) => {
          const today = new Date().setHours(0, 0, 0, 0) / 1000;
          movies.forEach(x => {
            const filteredMovie = x.emissionsDays.some((m: any) => m.seconds >= today)
            if (!filteredMovie) {
              this.changeMovieRole(x.id);
            }
          });
        })
      );
    // .subscribe(res => console.log(res));
    return collection;
  }

  private changeMovieRole(movieId: string): void {
    this.fire.collection('movies').doc(movieId).set({
      role: 'hide'
    }, {
      merge: true
    })
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
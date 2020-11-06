import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { map, tap } from "rxjs/operators";
import { Movie } from "../models/movie.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DbService {
  constructor(
    private readonly fire: AngularFirestore,
    private readonly router: Router
  ) {}

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
      trailers: [
        formData.filmDetails.firstTrailer,
        formData.filmDetails.secondTrailer,
      ],
      emissions: formData.emmissionsList,
      emissionsDays: formData.emmissionsList.map((e) => e.date),
    };
    this.fire.collection("movies").add(movie);
  }

  getAllMovies(): Observable<any> {
    return this.fire
      .collection("movies")
      .snapshotChanges()
      .pipe(
        map((snapshot) => {
          return snapshot.map((s) => {
            return {
              id: s.payload.doc.id,
              ...s.payload.doc.data(),
            };
          });
        })
      );
  }

  getMovieById(id: string): Observable<any> {
    return this.fire.doc(`movies/${id}`).valueChanges();
  }

  getMoviesByDate(date: Date) {
    this.router.navigate(["/wyszukiwarka", date.getTime()]);
    const collection = this.fire
      .collection("movies", (ref) =>
        ref.where("emissionsDays", "array-contains", date)
      )
      .snapshotChanges()
      .pipe(
        map((snapshot) => {
          return snapshot.map((s) => {
            return {
              id: s.payload.doc.id,
              ...s.payload.doc.data(),
            };
          });
        })
      );
    return collection;
  }

  getUpcommingMovies() {
    const collection = this.fire
      .collection("movies", (ref) => ref.where("role", "==", "upcoming"))
      .snapshotChanges()
      .pipe(
        map((snapshot) => {
          return snapshot.map((s) => {
            return {
              id: s.payload.doc.id,
              ...s.payload.doc.data(),
            };
          });
        })
      );
    return collection;
  }

  getCurrentMovies() {
    const collection = this.fire
      .collection("movies", (ref) => ref.where("role", "==", "play"))
      .snapshotChanges()
      .pipe(
        map((snapshot) => {
          return snapshot.map((s) => {
            return {
              id: s.payload.doc.id,
              ...s.payload.doc.data(),
            };
          });
        })
      );
    return collection;
  }
}

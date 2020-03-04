import { DbService } from '../../shared/db.service';
import { Emmission } from '../../cinema-home/movie.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-new-film',
  templateUrl: './new-film.component.html',
  styleUrls: ['./new-film.component.scss']
})
export class NewFilmComponent implements OnInit {
  form;
  emmission: Emmission;
  movieCard: any;
  constructor(private fb: FormBuilder, private db: DbService) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      filmDetails: this.fb.group({
        title: [''],
        description: [''],
        director: [''],
        mainPoster: [''],
        backgroundImg: [''],
        type: [''],
        duration: [''],
        rating: [''],
        firstTrailer: [''],
        secondTrailer: [''],
        age: [''],
        role: ['']
      }),
      emmissionsList: this.fb.array([]),
      emmission: this.fb.group({
        date: ['', Validators.required],
        hours: this.fb.array([])
      }),
      hourObject: this.fb.group({
        hour: ['', Validators.required],
        type: ['', Validators.required],
        sound: ['', Validators.required],
      })
    });
  }

   addMovie() {
    this.db.addNewFilm(this.form.value);
  }

   addNewHour(e: Event): void {
    const emmissionHourArray: FormArray = this.form.get('emmission.hours');
    const hourObject: FormGroup = this.form.get('hourObject');

    e.preventDefault();
    emmissionHourArray.push(new FormControl(hourObject.value));
    hourObject.reset();
  }

   addNewEmmission(e: Event): void {
    const emmissionArray: FormArray = this.form.get('emmissionsList');
    const dayEmmissison: FormGroup = this.form.get('emmission');

    e.preventDefault();
    emmissionArray.push(new FormControl(dayEmmissison.value));
    dayEmmissison.reset();
    dayEmmissison.setControl('hours', new FormArray([]));
  }

  get emmissionsList(): Array<any> {
    return this.form.get('emmissionsList').value as Array<any>;
  }

  get singleEmmissionState(): boolean {
    if (this.form.get('hourObject').valid && this.form.get('emmission').valid) {
      return true;
    }
  }

  get singleDayState(): boolean {
    if (this.form.get('emmission.hours').length > 0) {
      return true;
    }
  }
}

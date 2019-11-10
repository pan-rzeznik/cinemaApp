import { Emmission } from './../movie.model';
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
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      filmDetails: this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        director: ['', Validators.required],
        mainPoster: ['', Validators.required],
        backgroundImg: ['', Validators.required],
        type: ['', Validators.required],
        duration: ['', Validators.required],
        rating: ['', Validators.required],
      }),
      emmissionsList: this.fb.array([]),
      emmission: this.fb.group({
        date: ['', Validators.required],
        hours: this.fb.array([])
      }),
      hourObject: this.fb.group({
        hour: ['', Validators.required],
        type: ['', Validators.required],
        dubbing: [false, Validators.required]
      })
    });

    console.log(this.form.get('emmission'));
  }

  addNewEmmission(e: Event): void {
    e.preventDefault(); 
    const emmissionArray: FormArray = this.form.get('emmission.hours');
    const hourObject: FormGroup = this.form.get('hourObject');

    emmissionArray.push(new FormControl(hourObject.value));
    hourObject.reset();
  }

  get singleEmmissionState(): boolean {
    if (this.form.get('hourObject').valid && this.form.get('emmission').valid) {
      return true;
    }
}
}

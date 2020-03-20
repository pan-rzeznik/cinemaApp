import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsFormGroup: FormGroup;
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.createMainForm();
  }

  createMainForm(): void {
    this.settingsFormGroup = this.fb.group({
      cooperation: this.fb.group({
        mainTitle: ['', Validators.required],
        mainDescription: ['', Validators.required],
        secondTitle: ['', Validators.required],
        secondDescription: ['', Validators.required],
        personData: this.fb.group({
          name: ['', Validators.required],
          companyName: ['', Validators.required],
          address: ['', Validators.required],
          post: ['', Validators.required],
          NIP: ['', Validators.required],
          phone: ['', Validators.required],
          website: ['', Validators.required],
          email: ['', Validators.required],
        })
      })
    });
  }
}

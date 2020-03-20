import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss']
})
export class MoviePreviewComponent implements OnInit {
  @Input() moviePreview;
  constructor() { }

  ngOnInit() {
  }

}

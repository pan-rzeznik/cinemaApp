import { NigthModeService } from './nigth-mode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cinemaApp';

  constructor(private readonly nigthModeService: NigthModeService) {}

  ngOnInit(): void {
    this.nigthModeService.setMode();
  }

}


import { Component, OnInit } from '@angular/core';
import { NigthModeService } from '../nigth-mode.service';

@Component({
  selector: 'app-night-mode',
  templateUrl: './night-mode.component.html',
  styleUrls: ['./night-mode.component.scss']
})
export class NightModeComponent implements OnInit {
    state: boolean;
    constructor(private readonly nigthModeService: NigthModeService) {}

    ngOnInit(): void {
      this.state = this.nigthModeService.getMode();
    }
    color() {
      this.state = this.nigthModeService.changeColorMode();
    }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-night-mode',
  templateUrl: './night-mode.component.html',
  styleUrls: ['./night-mode.component.scss']
})
export class NightModeComponent {

  stan = false;
  color() {

    if (!this.stan) {
      document.documentElement.style.setProperty('--background-card', 'var(--dark-background-card)');
      document.documentElement.style.setProperty('--background-section', 'var(--dark-background-section)');
      document.documentElement.style.setProperty('--background-title-color', 'var(--dark-title-color)');
      document.documentElement.style.setProperty('--background-description-color', 'var(--dark-description-color)');
      this.stan = !this.stan;
    } else {
      document.documentElement.style.setProperty('--background-card', 'var(--light-background-card)');
      document.documentElement.style.setProperty('--background-section', 'var(--light-background-section)');
      document.documentElement.style.setProperty('--background-title-color', 'var(--light-title-color)');
      document.documentElement.style.setProperty('--background-description-color', 'var(--light-description-color)');
      this.stan = !this.stan;
    }
  }

}

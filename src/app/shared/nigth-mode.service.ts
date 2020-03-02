import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NigthModeService {
  private state = false;

  constructor() { }

    changeColorMode() {
        if (!this.state) {
         this.setLightMode();
         this.state = !this.state;
        } else {
          this.setDarkMode();
          this.state = !this.state;
        }
        this.saveModeToLocalStorage();
        return this.state;
    }

    getMode(): boolean {
      this.state = JSON.parse(localStorage.getItem('mode'));
      return this.state;
    }

    setMode() {
        const mode = JSON.parse(localStorage.getItem('mode'));
        if (!mode) {
          this.setDarkMode();
        } else {
          this.setLightMode();
        }

    }

    private saveModeToLocalStorage() {
      localStorage.setItem('mode', JSON.stringify(this.state));
    }

   private setLightMode() {
    document.documentElement.style.setProperty('--background-card', 'var(--dark-background-card)');
    document.documentElement.style.setProperty('--background-section', 'var(--dark-background-section)');
    document.documentElement.style.setProperty('--title-color', 'var(--dark-title-color)');
    document.documentElement.style.setProperty('--description-color', 'var(--dark-description-color)');
    document.documentElement.style.setProperty('--panel-icon-color', 'var(--dark-panel-icon-color)');
  }

  private setDarkMode() {
    document.documentElement.style.setProperty('--background-card', 'var(--light-background-card)');
    document.documentElement.style.setProperty('--background-section', 'var(--light-background-section)');
    document.documentElement.style.setProperty('--title-color', 'var(--light-title-color)');
    document.documentElement.style.setProperty('--description-color', 'var(--light-description-color)');
    document.documentElement.style.setProperty('--panel-icon-color', 'var(--light-panel-icon-color)');
  }
}

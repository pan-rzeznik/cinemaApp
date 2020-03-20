import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  api;
  constructor(@Inject('API_URL') ale: string) {}

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faEdit, faTrashAlt, faPowerOff, faUserCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  icons = {
    faPlusCircle,
    faEdit,
    faTrashAlt,
    faPowerOff,
    faUserCog
  };
  constructor() { }

  ngOnInit() {
  }

}

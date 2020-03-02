import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-item-menu',
  templateUrl: './card-item-menu.component.html',
  styleUrls: ['./card-item-menu.component.scss']
})
export class CardItemMenuComponent implements OnInit {
  @Input() faIcon: string;
  constructor() { }

  ngOnInit() {
  }

}

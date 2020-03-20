import { Component, OnInit } from '@angular/core';
import { faUserAlt, faBuilding, faAddressCard, faPhone, faGlobe, faAt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cooperation',
  templateUrl: './cooperation.component.html',
  styleUrls: ['./cooperation.component.scss']
})
export class CooperationComponent{
  icons = {
    faUserAlt,
    faBuilding,
    faAddressCard,
    faPhone,
    faGlobe,
    faAt
  };

}

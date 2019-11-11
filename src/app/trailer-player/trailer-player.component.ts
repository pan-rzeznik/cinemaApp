import { Trailer } from './../trailer';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trailer-player',
  templateUrl: './trailer-player.component.html',
  styleUrls: ['./trailer-player.component.scss']
})
export class TrailerPlayerComponent implements OnInit {
  @Input() link: string;
  source: string;

  ngOnInit(): void {
   this.source = new Trailer(this.link).getSourceUrl();
   console.log(this.source);
   
  }

}

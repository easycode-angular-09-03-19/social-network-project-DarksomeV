import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-favourites-item',
  templateUrl: './favourites-item.component.html',
  styleUrls: ['./favourites-item.component.css']
})
export class FavouritesItemComponent implements OnInit {
  @Input() favourite;
  constructor() { }

  ngOnInit() {
  }

}

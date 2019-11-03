import {Component, Input, OnInit} from '@angular/core';
import { Photo } from "../../interfaces/PhotoAnswer";

@Component({
  selector: 'app-picture-preview',
  templateUrl: './picture-preview.component.html',
  styleUrls: ['./picture-preview.component.css']
})
export class PicturePreviewComponent implements OnInit {
  @Input() img: Photo;
  constructor() { }

  ngOnInit() {
  }

}

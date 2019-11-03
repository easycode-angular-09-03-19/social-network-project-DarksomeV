import {Component, Input, OnInit} from '@angular/core';
import {UserServerAnswer} from "../../../../common/interfaces/UserServerAnswer";

@Component({
  selector: 'app-profile-controls',
  templateUrl: './profile-controls.component.html',
  styleUrls: ['./profile-controls.component.css']
})
export class ProfileControlsComponent implements OnInit {
  @Input() user: UserServerAnswer;
  constructor() { }

  ngOnInit() {
  }

}

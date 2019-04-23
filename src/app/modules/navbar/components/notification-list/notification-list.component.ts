import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  @Input() notifications;
  constructor() { }

  ngOnInit() {
  }

}

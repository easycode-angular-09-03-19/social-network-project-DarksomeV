import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NotificationsService } from "../../../services/notifications.service";
import { Notification } from "../../../interfaces/Notification";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHidden = true;
  isNotificationsHidden = true;
  notifications;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationsService
  ) { }

  ngOnInit() {
    this.notificationService.getNotifications().subscribe((data: Notification[])=>{
      this.notifications = data;
    });

    this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd)
    )
      .subscribe((event) => {
        this.activatedRoute.firstChild.data.subscribe((value) => {
          console.log(value);
          this.isHidden = !!value.withoutHeader;
        });
      });
  }


  notificationBellClick(){
    this.isNotificationsHidden = !this.isNotificationsHidden;
  }
}

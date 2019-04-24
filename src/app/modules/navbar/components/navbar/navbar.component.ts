import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {NotificationsService} from "../../../../services/notifications.service";
import {Notification} from "../../../../interfaces/Notification";
import {CurrentUserStoreService} from "../../../../common/services/current-user-store.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHidden = true;
  userAvatar;
  userId;
  isNotificationsHidden = true;
  notifications;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationsService,
    private currentUser: CurrentUserStoreService
  ) {
  }

  ngOnInit() {
    this.notificationService.getNotifications().subscribe((data: Notification[]) => {
      this.notifications = data;
    });

    this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd)
    )
      .subscribe((event) => {
        this.activatedRoute.firstChild.data.subscribe((value) => {
          this.isHidden = !!value.withoutHeader;
        });
      });

    this.currentUser.userWatcher.subscribe(({avatar, _id}) => {
      if (_id) {
        this.userAvatar = avatar;
        this.userId = _id;
      }
    })
  }


  notificationBellClick() {
    this.isNotificationsHidden = !this.isNotificationsHidden;
  }
}

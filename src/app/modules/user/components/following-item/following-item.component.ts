import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../../common/services/user.service";
import {CurrentUserStoreService} from "../../../../common/services/current-user-store.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-following-item',
  templateUrl: './following-item.component.html',
  styleUrls: ['./following-item.component.css']
})
export class FollowingItemComponent implements OnInit {
  @Input() item;
  isFollowed = true;
  constructor(
    private currentUserStoreService: CurrentUserStoreService,
    private messageService: MessageService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.isFollowed = this.currentUserStoreService.info.followings.some((elem) => elem === this.item._id);
  }

  actionFollow(id:string) {
    this.userService.following(id).subscribe(() => {
      this.isFollowed = !this.isFollowed;
    }, (err) => {
      this.messageService.add({severity:'error', summary:'Error', detail:'Via MessageService'});
    })
  }

}

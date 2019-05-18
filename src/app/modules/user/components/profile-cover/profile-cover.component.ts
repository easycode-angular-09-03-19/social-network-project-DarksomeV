import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CurrentUserStoreService} from "../../../../common/services/current-user-store.service";
import {UserService} from "../../../../common/services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile-cover',
  templateUrl: './profile-cover.component.html',
  styleUrls: ['./profile-cover.component.css']
})
export class ProfileCoverComponent implements OnInit {
  @Input() cover;
  @Input() isCurrentUser;
  @Output('upload') upload = new EventEmitter();
  constructor(
    private currentUser: CurrentUserStoreService,
    private userService: UserService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
  }

  loadCover(input){

    const [newCover] = input.files;
    if (newCover){
      this.upload.emit(newCover);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {GlobalAuthService} from "../../../../services/global-auth.service";
import {UserService} from "../../../../common/services/user.service";
import {ActivatedRoute} from "@angular/router";
import {UserServerAnswer} from "../../../../common/interfaces/UserServerAnswer";
import {UploadCoverServerAnswer} from "../../../../common/interfaces/UploadCoverServerAnswer";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserServerAnswer;
  authUserId;
  id;
  tempId;
  activeTab ='selfies';
  constructor(
    private globalAuth: GlobalAuthService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((data: any) => {
      this.tempId = data.params.id;
      this.getUser();
    });

    this.id = this.route.snapshot.params.id;
    this.authUserId = this.globalAuth.userId;

  }

  getUser() {
    this.userService.getUserById(this.tempId).subscribe((user: UserServerAnswer)=>{
      if (user._id) {
        this.user = user;
      }
    });
  }

  uploadCover(cover){
    this.userService.uploadCover(cover).subscribe((res: UploadCoverServerAnswer)=>{
      if (!res.error) {
        this.getUser();
      }
    });
  }

}

import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProfileService} from "../../services/profile.service";
import {Follow} from "../../interfaces/Follow";

@Component({
  selector: 'app-profile-followings',
  templateUrl: './profile-followings.component.html',
  styleUrls: ['./profile-followings.component.css']
})
export class ProfileFollowingsComponent implements OnInit {
  private followings;
  @Input() userId;
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.profileService.getFollowings(this.userId).subscribe((data: Follow) => {
      this.followings =  data.users;
      console.log(this.followings);
    }, (err)=>{
      console.log(err);
    })
  }

}

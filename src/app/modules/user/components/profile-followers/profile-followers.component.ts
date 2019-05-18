import {Component, Input, OnInit} from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {Follow} from "../../interfaces/Follow";

@Component({
  selector: 'app-profile-followers',
  templateUrl: './profile-followers.component.html',
  styleUrls: ['./profile-followers.component.css']
})
export class ProfileFollowersComponent implements OnInit {
  @Input() userId;
  followers;
  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.profileService.getFollowers(this.userId).subscribe((data: Follow) => {
      this.followers =  data.users;
    }, (err)=>{
      console.log(err);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../common/services/user.service";
import { ActivatedRoute } from "@angular/router";
import { ProfileService } from "../../services/profile.service";
import { Photo, PhotoAnswer }  from "../../interfaces/PhotoAnswer";

@Component({
  selector: 'app-profile-selfies',
  templateUrl: './profile-selfies.component.html',
  styleUrls: ['./profile-selfies.component.css']
})
export class ProfileSelfiesComponent implements OnInit {
  id;
  images: Photo[];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getImages();
  }

  getImages() {
    this.profileService.getImages(this.id).subscribe((next: PhotoAnswer) => {
      this.images = next.images;
    });
  }

}

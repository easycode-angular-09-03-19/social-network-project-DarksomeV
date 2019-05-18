import {Component, Input, OnInit} from '@angular/core';
import { UserService } from "../../../../common/services/user.service";
import { ActivatedRoute } from "@angular/router";
import { ProfileService } from "../../services/profile.service";
import { Photo, PhotoAnswer }  from "../../interfaces/PhotoAnswer";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-profile-selfies',
  templateUrl: './profile-selfies.component.html',
  styleUrls: ['./profile-selfies.component.css']
})
export class ProfileSelfiesComponent implements OnInit {
  id;
  images: Photo[];
  @Input() userId;
  @Input() isCurrentUser;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private profileService: ProfileService
  ) {
  }

  ngOnInit() {
    this.id = this.userId;
    this.getImages();
  }

  loadPhotos(input){
    const [...files] = Array.from(input.files);
    console.log(files);
    this.userService.uploadPhotos(files).subscribe((data) => {
      this.messageService.add({severity:'success', summary:'Success', detail:'Via MessageService'});
      this.getImages();
    }, (err) => {
      this.messageService.add({severity:'error', summary:'Error', detail:'Via MessageService'});
    });
  }

  getImages() {
    this.profileService.getImages(this.id).subscribe((next: PhotoAnswer) => {
      this.images = next.images;
      console.log(this.images);
    });
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {UserService} from "../../../../common/services/user.service";
import {ActivatedRoute} from "@angular/router";
import {MessageService} from "primeng/api";
import {PhotoAnswer} from "../../interfaces/PhotoAnswer";

@Component({
  selector: 'app-profile-favourites',
  templateUrl: './profile-favourites.component.html',
  styleUrls: ['./profile-favourites.component.css']
})
export class ProfileFavouritesComponent implements OnInit {
  private favourites: any;
  @Input() userId;
  id;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.profileService.getFavorites(this.userId).subscribe((selfies: PhotoAnswer) => {
      this.favourites = selfies.images;
    }, (err)=>{
      this.messageService.add({severity:'error', summary:'Error', detail:'Via MessageService'});
    })
  }

}

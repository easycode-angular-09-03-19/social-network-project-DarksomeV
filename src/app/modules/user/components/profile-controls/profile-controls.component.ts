import {Component, Input, OnInit} from '@angular/core';
import {UserServerAnswer} from "../../../../common/interfaces/UserServerAnswer";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile-controls',
  templateUrl: './profile-controls.component.html',
  styleUrls: ['./profile-controls.component.css']
})
export class ProfileControlsComponent implements OnInit {
  @Input() user: UserServerAnswer;
  activeTab: Observable<string>;

  tabList = [
    {
      tab: 'selfies',
      text: 'SELFIES',
      in_api: 'my_images'
    },
    {
      tab: 'favourites',
      text: 'FAVOURITES',
      in_api: 'favourites'
    },
    {
      tab: 'followings',
      text: 'FOLLOWINGS',
      in_api: 'followings'
    },
    {
      tab: 'followers',
      text: 'FOLLOWERS',
      in_api: 'followers'
    }
  ];
  constructor(
    private  route: ActivatedRoute,
    private  router: Router,

  ) { }

  ngOnInit() {
    this.activeTab = this.route.queryParams.pipe(map((params) => params.tab));
    this.route.queryParams.subscribe((params) => {
      const isValidTab = this.tabList.some((item) => item.tab === params.tab);
      if (!params.tab || !isValidTab){
        this.router.navigate([], {
          relativeTo: this.route ,
          queryParams: { tab: 'selfies'}
        })
      }
    })
  }

}

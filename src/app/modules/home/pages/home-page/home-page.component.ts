import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../services/home.service";
import {zip} from "rxjs";
import {HomeContent} from "../../interfaces/HomeContent";
import {Challenge} from "../../interfaces/Challenge";
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  homePageData: HomeContent;
  challenges: Challenge[];
  constructor(
    private homeService: HomeService,
  ) { }

  ngOnInit() {
    zip(
      this.homeService.getHomePage(), this.homeService.getActiveChallenges()
    ).subscribe(([homePageData, { challenges }]: any)=>{
      this.challenges = challenges;
      this.homePageData = homePageData;
    });
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileCoverComponent } from './components/profile-cover/profile-cover.component';
import { ProfileControlsComponent } from './components/profile-controls/profile-controls.component';
import { ProfileTabsContainerComponent } from './components/profile-tabs-container/profile-tabs-container.component';
import { ProfileSelfiesComponent } from './components/profile-selfies/profile-selfies.component';
import { PicturePreviewComponent } from './components/picture-preview/picture-preview.component';
import { ProfileFavouritesComponent } from './components/profile-favourites/profile-favourites.component';
import { FavouritesItemComponent } from './components/favourites-item/favourites-item.component';
import { ProfileFollowingsComponent } from './components/profile-followings/profile-followings.component';
import { FollowingItemComponent } from './components/following-item/following-item.component';
import { ProfileFollowersComponent } from './components/profile-followers/profile-followers.component';

@NgModule({
  declarations: [ProfileComponent, SettingsComponent, ProfileCoverComponent, ProfileControlsComponent, ProfileTabsContainerComponent, ProfileSelfiesComponent, PicturePreviewComponent, ProfileFavouritesComponent, FavouritesItemComponent, ProfileFollowingsComponent, FollowingItemComponent, ProfileFollowersComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

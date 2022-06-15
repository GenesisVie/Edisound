import {AppRoutingModule} from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NeumorphyUIModule} from "neumorphy-ui";

import {AppComponent} from './app.component';
import {VinylComponent} from './vinyl/vinyl.component';
import {HomeComponent} from './home/home.component';
import {PlaylistComponent} from './playlist/playlist.component';
import {MusicComponent} from './music/music.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {TestsComponent} from "./tests/tests.component";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxSplideModule} from 'ngx-splide';
import {PlayerComponent} from './player/player.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    VinylComponent,
    HomeComponent,
    PlaylistComponent,
    MusicComponent,
    PagenotfoundComponent,
    TestsComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    NgxSplideModule,
    NeumorphyUIModule,
    FontAwesomeModule,
    AppRoutingModule,
    NeumorphyUIModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

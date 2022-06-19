import {AppRoutingModule} from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NeumorphyUIModule} from "neumorphy-ui";

import {AppComponent} from './app.component';
import {VinylComponent} from './components/vinyl/vinyl.component';
import {HomeComponent} from './pages/home/home.component';
import {PlaylistComponent} from './pages/playlist/playlist.component';
import {MusicComponent} from './music/music.component';
import {PagenotfoundComponent} from './pages/pagenotfound/pagenotfound.component';
import {TestsComponent} from "./pages/tests/tests.component";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxSplideModule} from 'ngx-splide';
import {PlayerComponent} from './pages/player/player.component';
import {HttpClientModule} from "@angular/common/http";

import { JacketComponent } from './components/jacket/jacket.component';
import { PlaylistItemComponent } from './components/playlist-item/playlist-item.component';
import { PlaylistSongsComponent } from './pages/playlist-songs/playlist-songs.component';
import { ListSongComponent } from './pages/list-song/list-song.component';
import { BackComponent } from './components/back/back.component';

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
    JacketComponent,
    PlaylistItemComponent,
    PlaylistSongsComponent,
    ListSongComponent,
    BackComponent
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

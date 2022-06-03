import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {NgxSplideModule} from 'ngx-splide';
import {NeumorphyUIModule} from 'neumorphy-ui';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {VinylComponent} from './vinyl/vinyl.component';
import {HomeComponent} from './home/home.component';
import {PlaylistComponent} from './playlist/playlist.component';
import {MusicComponent} from './music/music.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {TestsComponent} from "./tests/tests.component";


@NgModule({
  declarations: [
    AppComponent,
    VinylComponent,
    HomeComponent,
    PlaylistComponent,
    MusicComponent,
    PagenotfoundComponent,
    TestsComponent
  ],
  imports: [
    BrowserModule,
    NgxSplideModule,
    AppRoutingModule,
    HttpClientModule,
    NeumorphyUIModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}

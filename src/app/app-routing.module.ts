import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {MusicComponent} from "./music/music.component";
import {PlaylistComponent} from "./pages/playlist/playlist.component";
import {PagenotfoundComponent} from "./pages/pagenotfound/pagenotfound.component";
import {TestsComponent} from "./pages/tests/tests.component";
import {PlaylistSongsComponent} from "./pages/playlist-songs/playlist-songs.component";
import {ListSongComponent} from "./pages/list-song/list-song.component";

const routes: Routes = [
  {path: '', component: HomeComponent,},
  {path: 'music', component: MusicComponent},
  {path: 'playlist', component: PlaylistComponent},
  {path: 'playlist/songs/:id', component: PlaylistSongsComponent},
  {path: 'songs/:id', component: ListSongComponent},
  {path: 'tests', component: TestsComponent},  //Page pour tester des composants
  {path: '**', component: PagenotfoundComponent},  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {MusicComponent} from "./music/music.component";
import {PlaylistComponent} from "./playlist/playlist.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {TestsComponent} from "./tests/tests.component";

const routes: Routes = [
  {path: '', component: HomeComponent,},
  {path: 'music', component: MusicComponent},
  {path: 'playlist', component: PlaylistComponent},
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

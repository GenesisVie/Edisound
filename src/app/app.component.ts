import { Component } from '@angular/core';

import { Music } from './interface/music';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Edisound';
  music:Music = {
    title:"Money",
    author:"Pink Floyd",
    path:"assets/songs/Madison.mp3",
    cover:"assets/covers/Madison.jpg"
  };
}

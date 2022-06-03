import {Component, OnInit} from '@angular/core';
import {Music} from "../interface/music";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Edisound';
  music: Music = {
    title: "Money",
    author: "Pink Floyd",
    path: "assets/songs/Madison.mp3",
    cover: "assets/covers/Madison.jpg"
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}

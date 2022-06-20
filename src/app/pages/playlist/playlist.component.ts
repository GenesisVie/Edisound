import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Playlist} from "../../interface/playlist";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlists: Playlist[] = []

  constructor(private  httpService: HttpService) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.httpService.getPlaylist().subscribe(playlist => {
      this.playlists = playlist
    })
  }

}

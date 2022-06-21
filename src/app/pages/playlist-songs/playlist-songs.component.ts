import {Component, Input, OnInit} from '@angular/core';
import {Music} from "../../interface/music";
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {Playlist} from "../../interface/playlist";
import {Location} from "@angular/common";
import {faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-playlist-songs',
  templateUrl: './playlist-songs.component.html',
  styleUrls: ['./playlist-songs.component.scss']
})
export class PlaylistSongsComponent implements OnInit {
  loader = true;
  faPlus = faPlus
  playlistId: string = ""
  playlistName: string = ""
  @Input() songs: Music[] = []

  constructor(private route: ActivatedRoute, private httpService: HttpService, private location: Location) {
  }

  back() {
    this.location.back()
  }

  ngOnInit(): void {
    this.playlistId = this.route.snapshot.params['id']
    this.httpService.getPlaylistById(this.playlistId).subscribe((playlist: Playlist) => {
      this.playlistName = playlist.name;
      this.songs = playlist.songs;
      this.loader = false;
    })
  }

}

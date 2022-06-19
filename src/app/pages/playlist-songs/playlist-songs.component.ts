import {Component, Input, OnInit} from '@angular/core';
import {Music} from "../../interface/music";
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {Playlist} from "../../interface/playlist";
import {Location} from "@angular/common";

@Component({
  selector: 'app-playlist-songs',
  templateUrl: './playlist-songs.component.html',
  styleUrls: ['./playlist-songs.component.scss']
})
export class PlaylistSongsComponent implements OnInit {

  playlistId: string = ""
  playlistName: string = ""
  @Input() songs : Music[] = []
  constructor(private route: ActivatedRoute, private httpService: HttpService, private location: Location) {
    this.playlistId = this.route.snapshot.params['id']
    httpService.getPlaylistById(this.playlistId).subscribe((playlist: Playlist) => {
      this.playlistName = playlist.name
      this.songs = playlist.songs
    })
  }

  back() {
    this.location.back()
  }
  ngOnInit(): void {
  }

}

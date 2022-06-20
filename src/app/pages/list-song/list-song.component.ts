import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Music} from "../../interface/music";
import {ActivatedRoute} from "@angular/router";
import {Playlist} from "../../interface/playlist";
import {Location} from "@angular/common";

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.scss']
})
export class ListSongComponent implements OnInit {

  songs: Music[]=[]
  playlistSongs: Music[]=[]
  playlist: Playlist = {
    id: 0,
    name: "",
    songs: []
  }

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getPlaylistById(this.route.snapshot.params['id']).subscribe(playlist => {
      this.playlist = playlist
      this.playlistSongs = playlist.songs
    })
    this.httpService.getSongs().subscribe(songs => {
      this.songs = songs
    })
  }

  putSongInPlaylist(song: Music) {
    this.playlistSongs.push(song)
    this.httpService.putSongPlaylist(this.playlist, this.playlistSongs).subscribe(() => {
    })
  }


}

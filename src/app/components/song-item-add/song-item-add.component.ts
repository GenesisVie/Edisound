import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Music, MusicItemPlaylist} from "../../interface/music";
import {Playlist} from "../../interface/playlist";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-song-item-add',
  templateUrl: './song-item-add.component.html',
  styleUrls: ['./song-item-add.component.scss']
})
export class SongItemAddComponent implements OnInit {

  @Input() song: Music = {
    id: 0,
    title: "",
    author: "",
    cover: "",
    path: ""
  }

  @Input() playlist: Playlist = {
    id: 0,
    name: "",
    songs: []
  }

  songItem: MusicItemPlaylist = {
    id: 0,
    title: "",
    author: "",
    path: "",
    cover: "",
    alreadyInPlaylist: false
  }

  btnAdd = {
    'label': '+',
    'active': this.songItem.alreadyInPlaylist,
    'size': 'sm',
  }

  putSongInPlaylist(song: Music, playlist: Playlist) {
    playlist.songs.push(song)
    const playlistSongs = playlist.songs
    this.httpService.putSongPlaylist(playlist, playlistSongs).subscribe(() => {
    })
    this.btnAdd.active = true
  }

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.songItem = {
      id: this.song.id,
      title: this.song.title,
      author: this.song.author,
      path: this.song.path,
      cover: this.song.cover,
      alreadyInPlaylist: this.playlist.songs.some(e => e.title === this.song.title)
    }

    const objectBtn = {
      label: '+',
      active: this.songItem.alreadyInPlaylist,
      size: 'sm',
    }
    this.btnAdd = objectBtn
  }
}

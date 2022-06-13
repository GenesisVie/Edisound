import {Component} from '@angular/core';
import {Music, WaitList} from "../interface/music";
import {AudioService} from "../services/audio.service";
import {HttpService} from "../services/http.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  songs: Music[] = []
  currentSong: Music|null = null;
  status: Observable<string>;
  playing: boolean = false;

  constructor(private http: HttpService, private audioService: AudioService) {
    http.getSongs().subscribe(songs => {
      this.songs = songs;
    })

    this.status = audioService.getPlayerStatus();
  }


  play() {
    this.audioService.playAudio()
  }

  pause() {
    this.audioService.pauseAudio()
  }

  setAudio(song: Music): void{
    this.currentSong = song
    this.audioService.setAudio(this.currentSong.path)
  }

  previous() {
    if (this.currentSong) {
      this.currentSong = this.songs[this.songs.indexOf(this.currentSong)-1 >= 0 ? this.songs.indexOf(this.currentSong)-1 : 0]
      this.setAudio(this.currentSong)
    }
  }

  next() {
    if (this.currentSong) {
      this.currentSong = this.songs[this.songs.indexOf(this.currentSong)+1 <= this.songs.length ? this.songs.indexOf(this.currentSong)+1 : this.songs.length]
      this.setAudio(this.currentSong)
    }
  }

  isPlaying() {
    this.status.subscribe((status:string) => {
      this.playing = status === "playing";
    })
  }
}

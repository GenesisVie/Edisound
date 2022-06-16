import {Component, ViewChild} from '@angular/core';
import {Music} from "../interface/music";
import {AudioService} from "../services/audio.service";
import {WaitingListService} from "../services/waiting-list.service";
import {Observable} from "rxjs";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import {RotationServiceService} from "../services/rotation-service.service";
import {VinylComponent} from "../vinyl/vinyl.component";

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
  timeElapsed: string = "00:00"
  timeRemaining: string = "00:00"
  percentRemaining: number = 0
  faPlay = faPlay;
  faPause = faPause;
  faBackward = faBackward;
  faForward = faForward;

  constructor(private wListService: WaitingListService, private audioService: AudioService, private rotationService: RotationServiceService) {

    this.wListService.wList.subscribe(songs => {
      this.songs = songs;
    });
    
    audioService.timeElapsed.asObservable().subscribe(time => {
       this.timeElapsed = time
    })
    audioService.timeRemaining.asObservable().subscribe(time => {
      this.timeRemaining = time
    })
    audioService.percentElapsed.asObservable().subscribe(percent => {
      this.percentRemaining = percent
    })
    this.status = audioService.getPlayerStatus();
    
  }

  play() {
    this.playing = true;
    this.rotationService.isPlay.next(true)
    this.audioService.playAudio()
  }

  pause() {
    this.playing = false;
    this.rotationService.isPlay.next(false)
    this.audioService.pauseAudio()
  }

  block(isBlocked: boolean) {
    if (isBlocked && this.playing) {
      this.audioService.pauseAudio()
    }else if(this.playing){
      this.audioService.playAudio()
    }
  }


  setAudio(song: Music): void{
    this.currentSong = song
    this.playing = true;
    this.rotationService.isPlay.next(true)
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

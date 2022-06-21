import {Component, OnInit, ViewChild} from '@angular/core';
import {Music} from "../../interface/music";
import {AudioService} from "../../services/audio.service";
import {WaitingListService} from "../../services/waiting-list.service";
import {Observable} from "rxjs";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import {RotationServiceService} from "../../services/rotation-service.service";
import {VinylComponent} from "../../components/vinyl/vinyl.component";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit{
  songs: Music[] = []
  currentSong?: Music;
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
    this.status = this.audioService.getPlayerStatus();
  }

  ngOnInit(){
    this.wListService.wList.subscribe(songs => {
      this.songs = songs;
      this.setAudioForInit(this.songs[0])
    });

    this.wListService.currentSongIndex.subscribe(i =>{
      if(i != 0){
        this.setAudio(this.songs[i])
      }
    })

    this.audioService.timeElapsed.asObservable().subscribe(time => {
       this.timeElapsed = time
    })
    this.audioService.timeRemaining.asObservable().subscribe(time => {
      this.timeRemaining = time
    })
    this.audioService.percentElapsed.asObservable().subscribe(percent => {
      this.percentRemaining = percent
    })
  }

  play() {
    if (!this.playing && this.songs.length > 0 && !this.currentSong) {
      this.setAudio(this.songs[0])
    }
    this.playing = true;
    this.rotationService.isPlay.next(true)
    this.audioService.playAudio()
  }

  pause() {
    this.playing = false;
    this.rotationService.isPlay.next(false)
    this.audioService.pauseAudio()
  }

  setAudio(song: Music): void{
    this.currentSong = song
    this.playing = true;
    this.rotationService.isPlay.next(true)
    this.audioService.setAudio(this.currentSong?.path)
  }

  setAudioForInit(song: Music): void{
    this.currentSong = song
    this.audioService.setAudioForInit(this.currentSong?.path)
  }

  previous() {
    if (this.currentSong) {
      this.wListService.currentSongIndex.next(this.songs.indexOf(this.currentSong)-1 >= 0 ? this.songs.indexOf(this.currentSong)-1 : 0);
    }
  }

  next() {
    if (this.currentSong) {
      this.wListService.currentSongIndex.next(this.songs.indexOf(this.currentSong)+1 <= this.songs.length ? this.songs.indexOf(this.currentSong)+1 : this.songs.length);
    }
  }

  isPlaying() {
    this.status.subscribe((status:string) => {
      this.playing = status === "playing";
    })
  }

  changeValue(value:number){
    this.audioService.seekAudio(value);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Music } from '../interface/music';
import {HttpService} from "./http.service";
import {Playlist} from "../interface/playlist";

@Injectable({
  providedIn: 'root'
})
export class WaitingListService {

  public wList = new BehaviorSubject<Music[]>([]);
  public currentSongIndex = new BehaviorSubject<number>(0);

  constructor(private http: HttpService){
  }

  public fullWaitinglist() {
    this.http.getSongs().subscribe(songs => {
      this.wList.next(songs);
    })
  }

  public allSongIntoWaitingList() {
    this.wList.next([]);
    this.http.getSongs().subscribe(songs => {
      this.wList.next(songs);
    })
  }

  public setPlaylistIntoWaitingList(playlist: Playlist) {
      this.wList.next([]);
      this.wList.next(playlist.songs);
  }
}

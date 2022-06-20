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

  constructor(private http: HttpService){
  }

  public setPlaylistIntoWaitingList(playlist: Playlist) {
      this.wList.next([]);
      this.wList.next(playlist.songs);
  }
}

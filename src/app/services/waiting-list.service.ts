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

  public setWaitingList(playlist: Playlist|null) {
    if (playlist === null) {
      this.http.getSongs().subscribe(songs => {
        this.wList.next(songs);
      })
    }else{
      this.wList.next([]);
      this.wList.next(playlist.songs);
    }
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Music } from '../interface/music';
import {HttpService} from "./http.service";

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
}

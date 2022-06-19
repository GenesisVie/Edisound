import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Music} from "../interface/music";
import {Playlist} from "../interface/playlist";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  private url = environment.url

  getSongs() {
    return this.http.get<Music[]>(`${this.url}/song`)
  }

  getSongById(id: number) {
    return this.http.get(`${this.url}/song/${id}`)
  }

  getPlaylist() {
    return this.http.get<Playlist[]>(`${this.url}/playlist`)
  }

  getPlaylistById(id: number) {
    return this.http.get(`${this.url}/playlist/${id}`)
  }

  putSongPlaylist(idPlaylist: number, songsId: number[]) {
    return this.http.post(`${this.url}/playlist/${idPlaylist}`, {"song": [songsId]})
  }
}

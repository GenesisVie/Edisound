import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private http: HttpClient) {
  }

  private url = environment.url

  getDb() {
    return this.http.get(this.url)
  }

  getSongs() {
    interface SongItem {
      "id": number,
      "title": string,
      "author": string,
      "path": string,
      "cover": string,
    }

    interface SongList extends Array<SongItem> {
    }

    return this.http.get<SongList>(`${this.url}/song`)
  }

  getSongById(id: number) {
    return this.http.get(`${this.url}/song/${id}`)
  }

  getPlaylist() {
    return this.http.get(`${this.url}/playlist`)
  }

  getPlaylistById(id: number) {
    return this.http.get(`${this.url}/playlist/${id}`)
  }

  putSongPlaylist(idPlaylist: number, songsId: number[]) {
    return this.http.post(`${this.url}/playlist/${idPlaylist}`, {"song": [songsId]})
  }
}

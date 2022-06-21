import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Playlist} from "../../interface/playlist";
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import {WaitingListService} from "../../services/waiting-list.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlists: Playlist[] = []
  loader = true;
  faEraser = faEraser;

  constructor(private  httpService: HttpService, public waitingService: WaitingListService, public router: Router, public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.httpService.getPlaylist().subscribe(playlist => {
      this.playlists = playlist
      this.loader = false;
    })
  }

  allSong() {
    this.waitingService.allSongIntoWaitingList()
    this.router.navigate([''], {relativeTo: this.route})
    this.loader = false;
  }
}

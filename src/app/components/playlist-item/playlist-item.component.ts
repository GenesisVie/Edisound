import {Component, Input, OnInit} from '@angular/core';
import {Playlist} from "../../interface/playlist";
import {WaitingListService} from "../../services/waiting-list.service";
import {ActivatedRoute, Router} from "@angular/router";
import 'hammerjs'

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.scss']
})
export class PlaylistItemComponent implements OnInit {

  @Input() playlist: Playlist = {
    id: 0,
    name: "",
    songs: []
  }
  constructor(private waitingList: WaitingListService, public router: Router, public route: ActivatedRoute) {

  }

  setWaitingList(playlist: Playlist):void {
    this.waitingList.setWaitingList(playlist)
    this.router.navigate([''], {relativeTo: this.route})
  }

  goToListSongs(playlist: Playlist):void {
    this.router.navigate(['/playlist/songs',  playlist.id], {relativeTo: this.route})
  }

  ngOnInit(): void {
  }

}

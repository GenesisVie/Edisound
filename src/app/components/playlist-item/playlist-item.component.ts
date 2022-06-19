import {Component, Input, OnInit} from '@angular/core';
import {Playlist} from "../../interface/playlist";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {WaitingListService} from "../../services/waiting-list.service";
import {ActivatedRoute, Router} from "@angular/router";

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

  playBtn = {
    'label': 'Jouer',
    'active': true,
    'size': 'sm',
    'action': () => {
      this.setWaitingList()
    }
  }

  goToBtn = {
    'label': 'Voir',
    'active': true,
    'size': 'sm',
    'action': () => {
      this.goToListSongs(this.playlist)
    }
  }
  constructor(private waitingList: WaitingListService, public router: Router, public route: ActivatedRoute) {

  }

  setWaitingList():void {
    this.waitingList.setWaitingList(this.playlist)
    this.router.navigate([''], {relativeTo: this.route})
  }

  goToListSongs(playlist: Playlist):void {
    this.router.navigate(['/playlist/songs',  playlist.id], {relativeTo: this.route})
  }

  ngOnInit(): void {
  }

}

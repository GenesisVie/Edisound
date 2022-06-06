import {Component, OnInit} from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  musics: any;
  musicList = [
    {
      title: 'Titre',
      author: 'Sous-titre',
      cover: "https://static.fnac-static.com/multimedia/Images/FR/NR/94/43/d7/14107540/1507-1/tsp20220322173128/Nostalgia.jpg",
      path: '',
      buttonItem: {
        'label': '+',
        'active': false,
        'size': 'sm',
        'action': function () {
          console.log('test');
        }
      }
    },
    {
      title: 'Titre',
      author: 'Sous-titre',
      cover: "https://static.fnac-static.com/multimedia/Images/FR/NR/94/43/d7/14107540/1507-1/tsp20220322173128/Nostalgia.jpg",
      path: '',
      buttonItem: {
        'label': '+',
        'active': false,
        'size': 'sm',
        'action': function () {
          console.log('test');
        }
      }
    }
  ];
  buttonAction = {
    'label': '+',
    'active': false,
    'size': 'sm',
    'action': function () {
      console.log(this);
    }
  }

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.http.getSongs()
      .subscribe(
        data => {
          console.log(data);
          this.musics = data;
        },
        error => console.error('Error: ', error));
  }
}

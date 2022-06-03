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
      subtitle: 'Sous-titre',
      img: "https://static.fnac-static.com/multimedia/Images/FR/NR/94/43/d7/14107540/1507-1/tsp20220322173128/Nostalgia.jpg",
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
      subtitle: 'Sous-titre',
      img: "https://static.fnac-static.com/multimedia/Images/FR/NR/94/43/d7/14107540/1507-1/tsp20220322173128/Nostalgia.jpg",
      buttonItem: {
        'label': '+',
        'active': false,
        'size': 'sm',
        'action': function () {
          console.log('test');
        }
      }
    }
  ]

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.http.getSongs()
      .subscribe(
        data => this.musics = data,
        error => console.error('Error: ', error));

    console.log(this.musics);
  }

}

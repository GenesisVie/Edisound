import { Component, OnInit } from '@angular/core';
import { RotationServiceService } from '../services/rotation-service.service';

import { Music } from '../interface/music';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public rService:RotationServiceService){

  }

  ngOnInit(): void {
    
  }

  title = 'Edisound';
  music:Music = {
    title:"Money",
    author:"Pink Floyd",
    path:"assets/songs/Madison.mp3",
    cover:"assets/covers/Madison.jpg"
  };

  faPlay = faPlay;
  faPause = faPause;
  faBackward = faBackward;
  faForward = faForward;

  activeBtn1:boolean = false;
  activeBtn2:boolean = true;

  pushPull(i:number){
    if(i==1){
      if(this.activeBtn1 == true){
        this.activeBtn1 = false
        this.activeBtn2 = true
        
        this.rService.isPlay.next(false);
      }else{
        this.activeBtn1 = true
        this.activeBtn2 = false

        this.rService.isPlay.next(true);
      }
    }else{
      if(this.activeBtn2 == true){
        this.activeBtn1 = true
        this.activeBtn2 = false

        this.rService.isPlay.next(true);
      }else{
        this.activeBtn1 = false
        this.activeBtn2 = true
        
        this.rService.isPlay.next(false);
      }
    }
  }
  changeSong(i:number){

  }
}
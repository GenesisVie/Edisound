import { Component, OnInit, SimpleChange } from '@angular/core';
import { ImageInterface } from 'neumorphy-ui';
import { WaitingListService } from '../../services/waiting-list.service';

@Component({
  selector: 'app-jacket',
  templateUrl: './jacket.component.html',
  styleUrls: ['./jacket.component.scss']
})
export class JacketComponent implements OnInit {

  jacketPath: ImageInterface[] = []
  actualIndex: number = 0;
  constructor(private wListService: WaitingListService) {
    
  }

  ngOnInit(): void {
    this.wListService.wList.subscribe(songs => {
      this.jacketPath = songs.map((song)=>{
        const image: ImageInterface = {
          src:song.cover
        }
        return image;
      }
      )
    });
    this.wListService.currentSongIndex.subscribe(i => {this.actualIndex = i})
  }

  changeIndex(newIndex:number){
      this.wListService.currentSongIndex.next(newIndex)
  }
}

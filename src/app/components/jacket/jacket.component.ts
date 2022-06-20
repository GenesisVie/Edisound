import { Component, OnInit } from '@angular/core';
import { ImageInterface } from 'neumorphy-ui';
import { WaitingListService } from '../../services/waiting-list.service';

@Component({
  selector: 'app-jacket',
  templateUrl: './jacket.component.html',
  styleUrls: ['./jacket.component.scss']
})
export class JacketComponent implements OnInit {

  jacketPath: ImageInterface[] = []
  constructor(private wListService: WaitingListService) {
    this.wListService.wList.subscribe(songs => {
      songs.forEach(element => {
        this.jacketPath.push({
            src: element.path
          }
        )
      });
    });
   }

  ngOnInit(): void {
  }
}

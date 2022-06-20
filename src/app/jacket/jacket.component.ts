import { Component, OnInit } from '@angular/core';
import { ImageInterface } from 'neumorphy-ui';
import { timeout } from 'rxjs';
import { WaitingListService } from '../services/waiting-list.service';

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
    console.log('JacketInit',this.jacketPath.slice())
  }
  ngOnChanges(){
    console.log("hola mama sita")
  }
  ngAfterViewInit(){
    console.log('JacketView',this.jacketPath.slice())
  }
}

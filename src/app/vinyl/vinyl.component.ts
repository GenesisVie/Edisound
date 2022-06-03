import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RotationServiceService } from '../services/rotation-service.service';
import "node_modules/zingtouch/dist/zingtouch.min.js";
import { Subject } from 'rxjs';
declare var ZingTouch: any;


@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.component.html',
  styleUrls: ['./vinyl.component.scss']
})
export class VinylComponent implements OnInit {

  @Input() cover?:string;
  
  currentAngle = 0;
  rotableStop = false;

  @ViewChild('wrapper') wrapper ?:ElementRef;
  @ViewChild('interaction') interaction ?:ElementRef;
  @ViewChild('rotable') rotable ?:ElementRef;


  constructor(public rService:RotationServiceService) {
  }

  ngOnInit(): void {
    this.rService.interval.subscribe(()=>{
      // console.log(this.rService.isPlay.value , !this.rService.isBlocked.value)
      if(this.rService.isPlay.value && !this.rService.isBlocked.value && !this.rotableStop)
        this.rotate();
    });
  }

  ngAfterViewInit(): void{
    let region = new ZingTouch.Region(this.interaction?.nativeElement);

    region.bind(this.interaction?.nativeElement, 'rotate', (e: any) => {
      this.currentAngle += e.detail.distanceFromLast;
      if(this.rotable)
        this.rotable.nativeElement.style.transform = 'rotate(' + this.currentAngle + 'deg)';
    });
  }
  
  rotate(){
    this.currentAngle += 1,98;
    if(this.rotable)
      this.rotable.nativeElement.style.transform = 'rotate(' + this.currentAngle + 'deg)';
  }

  onKey(event:any){
    this.rService.isBlocked.next(event.type === "touchstart")
    this.rotableStop = event.type === "touchstart"
  }
}

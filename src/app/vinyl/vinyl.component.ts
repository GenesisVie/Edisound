import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import "node_modules/zingtouch/dist/zingtouch.min.js";
declare var ZingTouch: any;


@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.component.html',
  styleUrls: ['./vinyl.component.scss']
})
export class VinylComponent implements OnInit {

  @Input() cover?:string;
  
  currentAngle = 0;

  @ViewChild('wrapper') wrapper ?:ElementRef;
  @ViewChild('interaction') interaction ?:ElementRef;
  @ViewChild('rotable') rotable ?:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    let region = new ZingTouch.Region(this.interaction?.nativeElement);

    region.bind(this.interaction?.nativeElement, 'rotate', (e: any) => {
      this.currentAngle += e.detail.distanceFromLast;
      if(this.rotable)
        this.rotable.nativeElement.style.transform = 'rotate(' + this.currentAngle + 'deg)';
    });
  }
  changeCover(){

  }

}

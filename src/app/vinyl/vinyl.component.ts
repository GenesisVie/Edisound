import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {RotationServiceService} from '../services/rotation-service.service';
import "node_modules/zingtouch/dist/zingtouch.min.js";
import {AudioService} from "../services/audio.service";

declare var ZingTouch: any;


@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.component.html',
  styleUrls: ['./vinyl.component.scss']
})
export class VinylComponent implements OnInit {

  @Input() cover?: string;
  @Output() blocked: EventEmitter<boolean> = new EventEmitter<boolean>()

  currentAngle = 0;
  rotableStop = false;
  currentTime = 0;
  playing = false;

  @ViewChild('wrapper') wrapper ?: ElementRef;
  @ViewChild('interaction') interaction ?: ElementRef;
  @ViewChild('rotable') rotable ?: ElementRef;


  constructor(public rService: RotationServiceService, private audioService: AudioService) {
    this.audioService.getCurrentTime().subscribe(ct => {
      this.currentTime = ct;
    })
    audioService.getPlayerStatus().subscribe(event => {
        this.playing = event.toString() === "playing"
      }
    )
  }

  ngOnInit(): void {
    this.audioService.currentTime.subscribe(() => {
      // console.log(this.rService.isPlay.value , !this.rService.isBlocked.value)
        if (this.rService.isPlay.value && !this.rService.isBlocked.value && !this.rotableStop && this.playing) {
          this.makeRotate();
        }
        this.blocked.emit(this.rService.isBlocked.value)
    });
  }

  ngAfterViewInit(): void {
    let region = new ZingTouch.Region(this.interaction?.nativeElement);

    region.bind(this.interaction?.nativeElement, 'rotate', (e: any) => {
      this.currentAngle += e.detail.distanceFromLast;
      if (this.rotable)
        this.rotable.nativeElement.style.transform = 'rotate(' + this.currentAngle + 'deg)';
        this.audioService.seekAudio(this.currentAngle/178)
    });
  }

  makeRotate() {
    this.currentAngle = this.currentTime * 178
    if (this.rotable)
      this.rotable.nativeElement.style.transform = 'rotate(' + this.currentAngle + 'deg)';
  }

  onKey(event: any) {
    this.rService.isBlocked.next(event.type === "touchstart")
    this.rotableStop = event.type === "touchstart"
  }
}

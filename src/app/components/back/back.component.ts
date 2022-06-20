import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent implements OnInit {

  faLeft = faArrowLeft;
  constructor(private  location: Location) { }

  ngOnInit(): void {
  }
  back() {
    this.location.back()
  }
}

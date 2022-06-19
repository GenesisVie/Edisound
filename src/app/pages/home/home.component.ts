import { Component, OnInit } from '@angular/core';
import { RotationServiceService } from '../../services/rotation-service.service';

import { Music } from '../../interface/music';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {

  }

  title = 'Edisound';

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RotationServiceService {

  interval = interval(10);
  public isPlay = new BehaviorSubject<boolean>(false);
  public isBlocked = new BehaviorSubject<boolean>(false);

  constructor() { }
}

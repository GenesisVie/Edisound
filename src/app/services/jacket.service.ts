import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JacketService {

  public cover: BehaviorSubject<string> = new BehaviorSubject('00:00');
  constructor() { }
}

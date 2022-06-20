import {Component, OnInit} from '@angular/core';
import {WaitingListService} from './services/waiting-list.service';
import {faMusic, faBars} from '@fortawesome/free-solid-svg-icons';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  faMusic = faMusic;
  faBars = faBars;
  pushPull = false;
  route = '';
  errors = [
    {
      display: 'modal-bottom' as const,
      active: false,
      type: 'success' as const,
    },
    {
      active: false,
      display: 'modal' as const,
      type: 'error' as const,
      button1: {
        label: 'OK',
        active: true,
        size: 'sm',
        action: () => {
          console.log('OK');
        }
      },
      button2: {
        label: 'OK',
        active: true,
        size: 'sm',
        action: () => {
          console.log('Annulé');
        }
      }
    }
  ]

  getError() {
    let err;
    this.errors.forEach((e: any) => {
      // @ts-ignore
      if (e.active && e.display === 'modal') {
        err = 'modal-displayed';
      } else {
        err = null;
      }
    })
    return err;
  }

  clearError() {
    this.errors.forEach((e: any) => {
      !e.active
    })
  }

  error1 = {
    display: 'modal-bottom' as const,
    active: false,
    type: 'success' as const,
  };

  error2 = {
    active: false,
    display: 'modal' as const,
    type: 'error' as const,
    button1: {
      label: 'OK',
      active: true,
      size: 'sm',
      action: () => {
        console.log('OK');
      }
    },
    button2: {
      label: 'OK',
      active: true,
      size: 'sm',
      action: () => {
        console.log('Annulé');
      }
    }
  }

  buttonPopup1 = {
    'label': 'OK',
    'active': true,
    'size': 'sm',
    'action': function () {
      console.log('OK');
    },
  }
  buttonPopup2 = {
    'label': 'Annuler',
    'active': true,
    'size': 'sm',
    'action': function () {
      console.log('Annulé');
    }
  }

  constructor(private wList: WaitingListService, private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.route = event.url;
      }
    });
  }

  ngOnInit(): void {
    this.wList.fullWaitinglist()
  }
}

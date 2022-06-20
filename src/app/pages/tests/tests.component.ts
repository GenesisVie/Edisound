import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  title = 'Edisound';
  subtitle = 'Sous-titre';
  description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
  img = "https://static.fnac-static.com/multimedia/Images/FR/NR/94/43/d7/14107540/1507-1/tsp20220322173128/Nostalgia.jpg"

  button1 = {
    'label': 'Bouton 1',
    'active': true,
    'size': 'sm',
    'action': function () {
      console.log('test');
    }
  }
  buttonItem1 = {
    'label': '+',
    'active': true,
    'size': 'sm',
    'action': function () {
      console.log('test');
    }
  }
  items = ['Item 1', 'Item 2'];

  constructor() {
  }

  ngOnInit(): void {
  }

}

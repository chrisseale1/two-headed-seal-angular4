import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeTitle = 'Welcome to the homepage, fool....';
  myString = 'I am metaluna';
  myBoolean = true;
  ninja = {
    name: 'Yoshi',
    belt: 'black'
  };
  alertMe (val) {
    alert(val);
  }
  constructor() { }

  ngOnInit() {
  }

}

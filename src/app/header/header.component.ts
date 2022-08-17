import { Component, OnInit } from '@angular/core';
import { inputs } from '../../inputs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes = inputs.headerText;
  constructor() { }

  ngOnInit(): void {
  }

}

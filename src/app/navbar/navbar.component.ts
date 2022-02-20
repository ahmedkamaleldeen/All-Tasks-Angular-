import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name:string="Ahmed Kamal"
  joptitle:string="MEARN STACK DEVELOPER"

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infomation',
  templateUrl: './infomation.component.html',
  styleUrls: ['./infomation.component.scss']
})
export class InfomationComponent implements OnInit {

  birthday: number;

  constructor() { }

  ngOnInit() {
    this.birthday = new Date().getFullYear() - new Date(1991, 11, 21).getFullYear();
  }







}

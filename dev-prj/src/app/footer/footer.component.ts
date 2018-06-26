import { Component, OnInit } from '@angular/core';
import {DbService} from "../db.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  menu =[];
  constructor(private service:DbService) { }

  ngOnInit() {
    this.menu = this.service.menu;
  }

}

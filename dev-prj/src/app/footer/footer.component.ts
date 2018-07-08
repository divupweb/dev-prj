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
      this.service.getMenu().subscribe((data)=>{this.menu=data},()=>{this.menu=this.service.menu});
  }
  nav(event:Event){
      event.preventDefault();
      const target = (<HTMLAnchorElement>event.target).hash.slice(1);
      document.getElementById(target).scrollIntoView({ behavior: 'smooth',block: "start"});
  }

}

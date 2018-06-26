import {AfterContentChecked,Component, OnInit} from '@angular/core';
import {DbService} from "../../db.service";

@Component({
  selector: 'app-menu-overlay',
  templateUrl: './menu-overlay.component.html',
  styleUrls: ['./menu-overlay.component.scss']
})
export class MenuOverlayComponent implements OnInit, AfterContentChecked {
  menu=[];
  constructor(private service:DbService) { }

  ngOnInit() {
    this.menu=this.service.menu;
  }
  ngAfterContentChecked(){
      let  list = document.body.querySelectorAll('li span');
      for(let i=0;i<list.length;i++){
        (<HTMLLIElement>list[i]).style.backgroundImage=this.menu[i].image;
      }
  }

  navigate(href){
    window.location.href=href;
      let menu = document.getElementById('menu-overlay');
      let list = menu.querySelectorAll('li');
      let elem = document.getElementById('header__button');
      if(elem.classList.contains('header__button_lock')){
          menu.style.display='none';
          elem.innerHTML='≡';
          document.body.style.overflow = 'auto';
          menu.style.overflow='hidden';
          (elem).classList.remove('header__button_lock');
          for(let i=0;i<list.length;i++){
              setTimeout(function(){(<HTMLLIElement>list[i]).classList.add('menu-overlay_hide')},i*100);
              (<HTMLLIElement>list[i]).classList.remove('menu-overlay_show');
          }
              document.getElementById('header').classList.remove('header_fixed');
              document.getElementById('logotype').setAttribute('src','../../assets/images/angular-logotype-white.png');
      }
      else{
          menu.style.display='block';
          elem.innerHTML='X';
          document.body.style.overflow = 'hidden';
          menu.style.overflow='auto';
          elem.classList.add('header__button_lock');
          for(let i=0;i<list.length;i++){
              setTimeout(function(){(<HTMLLIElement>list[i]).classList.add('menu-overlay_show')},i*100);
              (<HTMLLIElement>list[i]).classList.remove('menu-overlay_hide');
          }
              document.getElementById('header').classList.add('header_fixed');
              document.getElementById('logotype').setAttribute('src','../../assets/images/angular-logotype-black.png');
      }
  }
}

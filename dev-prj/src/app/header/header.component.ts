import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('toggle') trigger;
  constructor() { }

  ngOnInit() {
  }
  redirectTo(){
      window.location.href='http://vk.com/id139171796';
  }
  menuToggle(){
    let menu = document.getElementById('menu-overlay');
    let list = menu.querySelectorAll('li');
    if((<HTMLDivElement>this.trigger.nativeElement).classList.contains('header__button_lock')){
        menu.style.display='none';
        this.trigger.nativeElement.innerHTML='≡';
       (<HTMLDivElement>this.trigger.nativeElement).classList.remove('header__button_lock');
        document.body.style.overflow='auto';
        menu.style.overflow='hidden';
       for(let i=0;i<list.length;i++){
           setTimeout(function(){(<HTMLLIElement>list[i]).classList.add('menu-overlay_hide')},i*100);
           (<HTMLLIElement>list[i]).classList.remove('menu-overlay_show');
       }
            document.getElementById('header').classList.remove('header_fixed');
            document.getElementById('logotype').setAttribute('src','../../assets/images/angular-logotype-white.png');
   }
   else{
        menu.style.display='block';
        this.trigger.nativeElement.innerHTML='<i class="fa fa-window-close"></i>';
       (<HTMLDivElement>this.trigger.nativeElement).classList.add('header__button_lock');
        document.body.style.overflow='hidden';
        menu.style.overflow='auto';
       for(let i=0;i<list.length;i++){
           document.body.style.overflow='hidden';
           setTimeout(function(){(<HTMLLIElement>list[i]).classList.add('menu-overlay_show')},i*100);
           (<HTMLLIElement>list[i]).classList.remove('menu-overlay_hide');
       }
           document.getElementById('header').classList.add('header_fixed');
           document.getElementById('logotype').setAttribute('src','../../assets/images/angular-logotype-black.png');
   }
  }
}

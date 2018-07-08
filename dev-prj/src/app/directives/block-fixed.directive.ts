import {Directive, ElementRef, OnInit, Renderer2} from "@angular/core";

@Directive({
    selector:'[blockFixed]'
})
export class BlockFixedDirective implements OnInit{
     constructor(private element:ElementRef, private renderer:Renderer2){}
     ngOnInit(){
          window.onscroll = ()=>{
              if(window.pageYOffset>50){
                  this.renderer.addClass(this.element.nativeElement,'header_fixed');
                  document.getElementById('logotype').setAttribute('src','../../assets/images/angular-logotype-black.png');
              }
              else {
                  this.renderer.removeClass(this.element.nativeElement, 'header_fixed');
                  document.getElementById('logotype').setAttribute('src', '../../assets/images/angular-logotype-white.png');
              }
          };
     }
}
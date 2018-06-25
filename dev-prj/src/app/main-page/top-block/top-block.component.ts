import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-top-block',
  templateUrl: './top-block.component.html',
  styleUrls: ['./top-block.component.scss']
})
export class TopBlockComponent implements OnInit {
    @ViewChild('h1') title_h1;
    @ViewChild('h2') title_h2;
    h1:String = 'Ищу работу front-end developer';
    h2:String = 'Получить более подробную информацию вы можете ниже';
  constructor() { }

  ngOnInit() {
      let array = this.h1.split('');
      let array2 = this.h2.split('');
      let ref_h1=this.title_h1.nativeElement;
      let ref_h2=this.title_h2.nativeElement;
      let i = 0;
      setTimeout(function timer(){
          if (i % 2 == 0)
              ref_h1.innerHTML+=array[i]+'|';
          else
              ref_h1.innerHTML=ref_h1.innerHTML.slice(0,-1)+array[i];
          i++;
          if (i<array.length)
              setTimeout(timer,45);
          else{
              i=0;
              setTimeout(function timer_2(){
                  if (i % 2 == 0)
                      ref_h2.innerHTML+=array2[i]+'|';
                  else
                      ref_h2.innerHTML=ref_h2.innerHTML.slice(0,-1)+array2[i];
                  i++;
                  if (i<array2.length)
                      setTimeout(timer_2,35);
              },100);
          }
      },1000);
  }

}

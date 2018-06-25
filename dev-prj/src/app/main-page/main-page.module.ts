import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { TopBlockComponent } from './top-block/top-block.component';
import { MainPageComponent } from './main-page.component';

@NgModule({
    declarations:[
    TopBlockComponent,
    MainPageComponent],
    imports:[
        CommonModule
    ]
})
export class MainPageModule{

}
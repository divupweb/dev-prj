import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { TopBlockComponent } from './top-block/top-block.component';
import { MainPageComponent } from './main-page.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {ReactiveFormsModule} from "@angular/forms";
import { InfomationComponent } from './infomation/infomation.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExpComponent } from './work-exp/work-exp.component';

@NgModule({
  declarations: [
    TopBlockComponent,
    MainPageComponent,
    FeedbackComponent,
    InfomationComponent,
    SkillsComponent,
    WorkExpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class MainPageModule {

}

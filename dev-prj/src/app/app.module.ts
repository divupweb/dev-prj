import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AppRoutingModule} from "./app-routing.module";
import {MainPageModule} from "./main-page/main-page.module";
import {BlockFixedDirective} from "./directives/block-fixed.directive";
import {DbService} from "./db.service";
import { MenuOverlayComponent } from './header/menu-overlay/menu-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
      BlockFixedDirective,
      MenuOverlayComponent,
  ],
  imports: [
    BrowserModule,
    MainPageModule,
    AppRoutingModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }

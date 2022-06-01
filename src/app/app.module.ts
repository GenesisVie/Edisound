import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxSplideModule } from 'ngx-splide';
import { VinylComponent } from './vinyl/vinyl.component';
import { NeumorphyUIModule } from 'neumorphy-ui';



@NgModule({
  declarations: [
    AppComponent,
    VinylComponent,
  ],
  imports: [
    BrowserModule,
    NgxSplideModule,
    NeumorphyUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

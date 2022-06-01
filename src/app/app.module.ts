import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NeumorphyUIModule } from 'neumorphy-ui';
import { NgxSplideModule } from 'ngx-splide';
import { VinylComponent } from './vinyl/vinyl.component';



@NgModule({
  declarations: [
    AppComponent,
    VinylComponent,
  ],
  imports: [
    BrowserModule,
    NeumorphyUIModule,
    NgxSplideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

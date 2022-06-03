import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxSplideModule } from 'ngx-splide';
import { VinylComponent } from './vinyl/vinyl.component';
import { NeumorphyUIModule } from 'neumorphy-ui';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    VinylComponent,
  ],
  imports: [
    BrowserModule,
    NgxSplideModule,
    NeumorphyUIModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OfferComponent } from './offer/offer.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {OfferService} from "./offer.service";


@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [OfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }

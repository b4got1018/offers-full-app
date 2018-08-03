import { Component, OnInit } from '@angular/core';
import {OfferService} from '../offer.service';
import {OfferData} from '../OfferData';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor(private offerService: OfferService) { }

  offers = [];
  offerData: OfferData = new OfferData();

  ngOnInit() {
    this.onGet();
  }

  onGet() {
    this.offerService.getOffers()
      .subscribe(
        /*(servers: any[]) => this.servers = servers,*/
        (offers: OfferData[]) => this.offers = offers,
        (error) => console.log(error)
      );
  }

  onSave(offerData: OfferData) {
    this.offers.push(offerData);
    this.offerService.storeOffer(offerData)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
  delete(offerData: OfferData) {
    this.offers.splice(this.offers.indexOf(offerData), 1);
    this.offerService.deleteOffer(offerData)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  select(offerData: OfferData){
    this.offerData = offerData;
  }

  update(offerData: OfferData){
    this.offerService.updateOffer(offerData)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}

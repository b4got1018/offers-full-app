import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {OfferData} from "./OfferData";



@Injectable()

export class OfferService {

  constructor(private http:Http) { }


  getOffers() {
    return this.http.get('http://localhost:8080/api/getOffers')
      .map(
        (response: Response) => {
          const data = response.json();
          /*          for (const user of data) {

           server.name = 'FETCHED_' + server.name;
           }*/
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  storeOffer(offerData: OfferData) {
    const headers = new Headers(
      {'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8080/api/insertOffer',
      JSON.stringify(offerData),
      {headers: headers });
  }

  updateOffer(offerData: OfferData) {
    const headers = new Headers(
      {'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8080/api/updateOffer',
      JSON.stringify(offerData),
      {headers: headers });
  }

  deleteOffer(offerData: OfferData) {
    const headers = new Headers(
      {'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8080/api/deleteOffer',
      JSON.stringify(offerData),
      {headers: headers });
  }
}
